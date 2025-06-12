var vm = new Vue({
    el: '.containerMain',
    data: {
        link_sites: [],
        link_banks: [],
        link_CX: [],
        link_noCX: [],
        showWho: 'table',
        count_bank: 0,
        count_card: 0,
        loan_sum: 0,
        card_union: [],
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
        clickSheet: function (type) {
            this.showWho = type
        },
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        // 初始化数组及序号
        createData: function (url) {
            this.$http.get(url).then(function (res) {
                var data = res.body.data
                var data = this.createIndex(data)
                data = this.disJudge(data)
                this.link_sites = data

                var data_noCX = this.createBnakNoCx(data)
                this.link_noCX = data_noCX

                this.count_card = this.getCountCard(data_noCX)
                this.card_union = this.getCardUnion(data_noCX)

                var head = this.createBankHead(data_noCX)
                this.link_banks = head

                var loan_sum = this.getLoanSum(head)
                this.loan_sum = loan_sum

                this.count_bank = this.getCountBank(head)

            }, function () {
            })
        },
        createIndex: function (list_data) {
            for (var i = 0; i < list_data.length; i++) {
                list_data[i].index = i
            }
            return list_data
        },
        createBnakNoCx: function (list_data) {
            list_h = []
            for (var i = 0; i < list_data.length; i++) {
                if (list_data[i].ext == "储蓄卡" || list_data[i].bill_date == ' - ')
                    continue
                var tmp = {
                    bank_name: list_data[i].bank_name,
                    bill_date: list_data[i].bill_date,
                    model_class: list_data[i].model_class.replace("col-sm-4 co-md-2 col-xs-4 everyModel everyModel_", ""),
                    index: list_data[i].is_top.index,
                    is_top: list_data[i].is_top,
                    img: list_data[i].img,
                    bank_type: list_data[i].bank_type,
                    card_name: list_data[i].card_name,
                    loan: list_data[i].loan,
                    card_union: list_data[i].card_union,
                    card_level: list_data[i].card_level,
                    card_tax: list_data[i].card_tax,
                    tax_free: list_data[i].tax_free,
                    tax_status: list_data[i].tax_status,
                    ext: list_data[i].ext,
                    bank_color: list_data[i].bank_color,
                    card_color: list_data[i].card_color,
                    ex_ext: list_data[i].ex_ext,
                    back_color: list_data[i].back_color
                }
                list_h.push(tmp)
            }
            return list_h
        },
        createBankHead: function (list_h) {
            list_h = this.unique(list_h)
            list_h = this.bubbleSort(list_h)
            return list_h
        },
        disJudge: function (list_data) {
            for (var i = 0; i < list_data.length; i++) {
                if (list_data[i].ext == '已注销，纪念') {
                    list_data[i].model_class = list_data[i].model_class + ' delClass'
                }
            }
            return list_data
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
        unique0: function (arr) {
            var unions = []
            var res = []
            for (var i = 0; i < arr.length; i++) {
                if (unions.indexOf(arr[i]) != -1) {
                    continue
                }
                var cardkTmp = arr[i]
                unions.push(cardkTmp)
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
        getCountBank: function (list_data) {
            return list_data.length
        },
        getCountCard: function (list_data) {
            return list_data.length
        },
        getLoanSum: function (list_data) {
            var loan_sum = 0
            for (var i = 0; i < list_data.length; i++) {
                loan_sum = loan_sum + parseInt(list_data[i].loan.replace(',', ''))
            }
            return loan_sum
        },
        getCardUnion: function (list_data) {
            var card_union = []
            for (var i = 0; i < list_data.length; i++) {
                card_union.push(list_data[i].card_union,)
            }

            var card_union_simple = this.unique0(card_union)

            var card_u = []
            for (var i = 0; i < card_union_simple.length; i++) {
                var count_union = 0
                for (var j = 0; j < card_union.length; j++) {
                    if (card_union_simple[i] == card_union[j]) {
                        count_union++
                    }
                }
                var tmp = {
                    union: card_union_simple[i],
                    sum: count_union
                }
                card_u.push(tmp)
            }
            return card_u
        },
    },
})