var vm = new Vue({
    el: '.containerMain',
    data: {
        link_sites: [],
        link_banks: [],
    },
    created: function () {
        var tittle_str = document.title
        this.createData('/files/' + tittle_str + '.json')
    },
    methods: {
        // Card页面判断
        to_top: function (index) {
            if (this.link_sites[index].is_top == 0) {
                var count = 0;
                for (var i = 0; i < this.link_sites.length; i++) {
                    count = count + this.link_sites[i].is_top
                }
                if (count > 0) { return }
                else {
                    this.link_sites[index].is_top = 1
                    this.link_sites[index].model_class = this.link_sites[index].model_class.replace('col-sm-4 co-md-2 col-xs-4 ', '') + ' to_center'
                }
            }
            else {
                this.link_sites[index].model_class = 'col-sm-4 co-md-2 col-xs-4 ' + this.link_sites[index].model_class.replace(' to_center', '')
                this.link_sites[index].is_top = 0
            }
        },
        createJson: function () {
            var json_obj = { data: this.link_sites }
            console.log(JSON.stringify(json_obj))
        },
        // 初始化数组及序号
        createData: function (url) {
            this.$http.get(url).then(function (res) {
                var data = res.body.data
                var data = this.createIndex(data)
                var head = this.createBankHead(data)
                this.link_sites = data
                this.link_banks = head
            }, function () {
            })
        },
        createIndex: function (list_data) {
            for (var i = 0; i < list_data.length; i++) {
                list_data[i].index = i
            }
            return list_data
        },
        createBankHead: function (list_data) {
            list_h = []
            for (var i = 0; i < list_data.length; i++) {
                if (list_data[i].ext == "储蓄卡" || list_data[i].bill_date == ' - ')
                    continue
                var tmp = {
                    bank_name: list_data[i].bank_name,
                    bill_date: list_data[i].bill_date,
                    model_class: list_data[i].model_class.replace("col-sm-4 co-md-2 col-xs-4 everyModel everyModel_", "")
                }
                list_h.push(tmp)
            }
            list_h = this.unique(list_h)
            list_h = this.bubbleSort(list_h)
            console.log(list_h)
            return list_h
        },
        unique: function (arr) {
            var banks = []
            var res = []
            for (var i = 0; i < arr.length; i++) {
                if (banks.indexOf(arr[i].bank_name) != -1) {
                    continue
                }
                var bankTmp = arr[i].bank_name
                banks.push(bankTmp)
                res.push(arr[i])
            }
            return res
        },
        bubbleSort: function (arr) {
            var len = arr.length;
            for (var i = 0; i < len - 1; i++) { 
                for (var j = 0; j < len - i - 1; j++) {
                    if (arr[j].bill_date > arr[j + 1].bill_date) {
                        var temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        },
    },
})