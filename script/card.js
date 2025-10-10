var vm = new Vue({
    el: ".containerMain",
    data: {
        link_sites: [],
        link_banks: [],
        link_CX: [],
        link_noCX: [],
        showWho: "table",
        count_bank: 0,
        count_card: 0,
        loan_sum: 0,
        loan_splice_sum: 0,
        card_union: [],
        currentTime: "",
    },
    created: function () {
        let tittle_str = document.title;
        this.createData("/files/" + tittle_str + ".json");
    },
    mounted() {
        // 每秒更新一次时间
        this.timer = setInterval(this.updateTime, 1000);
    },
    beforeDestroy() {
        // 清除定时器，避免内存泄漏
        clearInterval(this.timer);
    },
    methods: {
        getCurrentTime: function () {
            let now = new Date();
            let year = now.getFullYear();
            let month = ("0" + (now.getMonth() + 1)).slice(-2);
            let day = ("0" + now.getDate()).slice(-2);
            let hours = ("0" + now.getHours()).slice(-2);
            let minutes = ("0" + now.getMinutes()).slice(-2);
            let seconds = ("0" + now.getSeconds()).slice(-2);
            return (
                year +
                "-" +
                month +
                "-" +
                day +
                " " +
                hours +
                ":" +
                minutes +
                ":" +
                seconds
            );
        },
        updateTime() {
            this.currentTime = this.getCurrentTime();
        }, // Card页面判断
        to_top: function (index) {
            if (this.link_sites[index].is_top === 0) {
                let count = 0;
                for (let i = 0; i < this.link_sites.length; i++) {
                    count = count + this.link_sites[i].is_top;
                }
                if (count > 0) {
                } else {
                    this.link_sites[index].is_top = 1;
                    this.link_sites[index].model_class =
                        this.link_sites[index].model_class.replace(
                            "col-sm-4 co-md-2 col-xs-4 ",
                            ""
                        ) + " to_center";
                }
            } else {
                this.link_sites[index].model_class =
                    "col-sm-4 co-md-2 col-xs-4 " +
                    this.link_sites[index].model_class.replace(" to_center", "");
                this.link_sites[index].is_top = 0;
            }
        },
        createJson: function () {
            let json_obj = { data: this.link_sites };
            // console.log(JSON.stringify(json_obj));
        },
        clickSheet: function (type) {
            this.showWho = type;
            let anchor = document.getElementById("sheet_top");
            anchor.scrollIntoView();
        },
        numberWithCommas: function (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        // 初始化数组及序号
        createData: function (url) {
            this.$http.get(url).then(
                function (res) {
                    let data = res.body.data;
                    data = this.createIndex(data);
                    data = this.disJudge(data);
                    // console.log(data)
                    this.link_sites = data;

                    let link_CX = this.createBnakCx(data);
                    link_CX = this.createSeq(link_CX);
                    this.link_CX = link_CX;

                    let data_noCX = this.createBnakNoCx(data);
                    data_noCX = this.createSeq(data_noCX);
                    this.link_noCX = data_noCX;

                    this.count_card = this.getCountCard(data_noCX);
                    this.card_union = this.getCardUnion(data_noCX);

                    let head = this.createBankHead(data_noCX);
                    this.link_banks = head;

                    this.loan_sum = this.getLoanSum(head);
                    this.loan_splice_sum = this.getLoanSpliceSum(data);

                    this.count_bank = this.getCountBank(head);
                },
                function () { }
            );
        },
        createIndex: function (list_data) {
            let count = 0
            let return_list = []
            for (let i = 0; i < list_data.length; i++) {
                if (list_data[i].is_on !== "no") {
                    list_data[i].index = count;
                    list_data[i].model_class = "col-sm-4 co-md-2 col-xs-4 everyModel";
                    list_data[i].img_class = "card_img";
                    return_list.push(list_data[i]);
                    count++;
                }
            }
            for (let i = 0; i < list_data.length; i++) {
                if (list_data[i].is_on === "no") {
                    list_data[i].index = count;
                    list_data[i].model_class = "col-sm-4 co-md-2 col-xs-4 everyModel";
                    list_data[i].img_class = "card_img";
                    return_list.push(list_data[i]);
                    count++;
                }
            }
            return return_list;
        },
        createSeq: function (list_data) {
            for (let i = 0; i < list_data.length; i++) {
                list_data[i].seq = i + 1;
            }
            return list_data;
        },
        createBnakCx: function (list_data) {
            let list_h = [];
            for (let i = 0; i < list_data.length; i++) {
                if (list_data[i].is_on === "debit") {
                    list_h.push(list_data[i]);
                }
            }
            return list_h;
        },
        createBnakNoCx: function (list_data) {
            let list_h = [];
            for (let i = 0; i < list_data.length; i++) {
                if (list_data[i].is_on === "credit")
                    list_h.push(list_data[i]);
            }
            return list_h;
        },
        createBankHead: function (list_h) {
            list_h = this.unique(list_h);
            list_h = this.bubbleSort(list_h);
            return list_h;
        },
        disJudge: function (list_data) {
            for (let i = 0; i < list_data.length; i++) {
                if (list_data[i].is_on === "no") {
                    list_data[i].model_class = list_data[i].model_class + " delClass";
                    list_data[i].img_class = list_data[i].img_class + " img_del";
                }
            }
            return list_data;
        },
        unique: function (arr) {
            let banks = [];
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                if (banks.indexOf(arr[i].bank_name) !== -1) {
                    continue;
                }
                let bankTmp = arr[i].bank_name;
                banks.push(bankTmp);
                res.push(arr[i]);
            }
            return res;
        },
        unique0: function (arr) {
            let unions = [];
            let res = [];
            for (let i = 0; i < arr.length; i++) {
                if (unions.indexOf(arr[i]) !== -1) {
                    continue;
                }
                let cardkTmp = arr[i];
                unions.push(cardkTmp);
                res.push(arr[i]);
            }
            return res;
        },
        bubbleSort: function (arr) {
            let len = arr.length;
            for (let i = 0; i < len - 1; i++) {
                for (let j = 0; j < len - i - 1; j++) {
                    if (arr[j].bill_date > arr[j + 1].bill_date) {
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
                }
            }
            return arr;
        },
        getCountBank: function (list_data) {
            return list_data.length;
        },
        getCountCard: function (list_data) {
            return list_data.length;
        },
        getLoanSum: function (list_data) {
            let loan_sum = 0;
            for (let i = 0; i < list_data.length; i++) {
                loan_sum = loan_sum + parseInt(list_data[i].loan.replace(",", ""));
            }
            return loan_sum;
        },
        getLoanSpliceSum: function (list_data) {
            let loan_splice_sum = 0;
            for (let i = 0; i < list_data.length; i++) {
                loan_splice_sum = loan_splice_sum + list_data[i].loan_splice;
            }
            return loan_splice_sum;
        },
        getCardUnion: function (list_data) {
            let card_union = [];
            for (let i = 0; i < list_data.length; i++) {
                card_union.push(list_data[i].card_union);
            }

            let card_union_simple = this.unique0(card_union);

            let card_u = [];
            for (let i = 0; i < card_union_simple.length; i++) {
                let count_union = 0;
                for (let j = 0; j < card_union.length; j++) {
                    if (card_union_simple[i] === card_union[j]) {
                        count_union++;
                    }
                }
                let tmp = {
                    union: card_union_simple[i],
                    sum: count_union,
                };
                card_u.push(tmp);
            }
            return card_u;
        },
    },
});
