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
        // this.createData("/files/" + tittle_str + ".json");
        this.createData(tittle_str);
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
            /*
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
                */

            let data = [
                {
                    is_top: 0,
                    img: "img/card/CCB_BJUT.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "工大蓝卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "北工大纪念卡面",
                    back_color: "back_CCB",
                    account_type: "",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_HSK.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "贺岁卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "贺岁卡卡面",
                    back_color: "back_CCB",
                    account_type: "",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_BJUT_GOLD.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "工大金卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "Gold",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "已注销，纪念",
                    ex_ext: "北工大纪念卡面",
                    back_color: "back_CCB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_CY.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "冲鸭卡",
                    loan: "20,000",
                    loan_splice: 800,
                    bill_date: "24",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: "580",
                    card_tax_date: "09-24",
                    tax_free: "10次刷免",
                    tax_status: "已免",
                    ext: "冲鸭",
                    ex_ext: "加油鸭,仅有银联白金权益,云闪付",
                    back_color: "back_CCB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_MUSE.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "Muse卡",
                    loan: "20,000",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "Visa",
                    card_level: "Platinum",
                    card_tax: "0",
                    card_tax_date: " - ",
                    tax_free: "有效期免年费",
                    tax_status: "已免",
                    ext: "建行自营币种直接转换",
                    ex_ext: "建行17种自营币种直接转换",
                    back_color: "back_CCB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_BONUS.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "Bonus卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "Gold",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "已注销，纪念",
                    ex_ext: "",
                    back_color: "back_CCB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CCB_DSB.jpg",
                    bank_type: "四大银行",
                    bank_name: "建设银行",
                    card_name: "大山白",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union|Visa",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CCB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/BOC_CQ.jpg",
                    bank_type: "四大银行",
                    bank_name: "中国银行",
                    card_name: "长情卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "",
                    back_color: "back_BOC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/BOC_MC.jpg",
                    bank_type: "四大银行",
                    bank_name: "中国银行",
                    card_name: "招财猫白金卡",
                    loan: "20,000",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "JCB",
                    card_level: "Platinum",
                    card_tax: "0",
                    card_tax_date: " - ",
                    tax_free: "有效期免年费",
                    tax_status: "已免",
                    ext: "JCB白金卡",
                    ex_ext: "JCB白金卡,日本贵宾厅和环球休息厅,日元实时转人民币入账",
                    back_color: "back_BOC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/BOC_ZCM.jpg",
                    bank_type: "四大银行",
                    bank_name: "中国银行",
                    card_name: "招财猫金卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "JCB",
                    card_level: "Gold",
                    card_tax: "0",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "已注销，纪念",
                    ex_ext: "JCB金卡",
                    back_color: "back_BOC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/ICBC_DEER.jpg",
                    bank_type: "四大银行",
                    bank_name: "工商银行",
                    card_name: "鹿卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "",
                    back_color: "back_ICBC",
                    account_type: "单卡单户|多币种",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/ICBC_HBC.jpg",
                    bank_type: "四大银行",
                    bank_name: "工商银行",
                    card_name: "黑白菜",
                    loan: "20,000",
                    loan_splice: 0,
                    bill_date: "10",
                    card_union: "Mastercard",
                    card_level: "World",
                    card_tax: "2,000",
                    card_tax_date: "05-10",
                    tax_free: "20K|10K|15次刷免",
                    tax_status: "已免",
                    ext: "",
                    ex_ext: "万事达世界卡,工行大白金,1次贵宾厅",
                    back_color: "back_ICBC",
                    account_type: "单卡单户|多币种",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/ICBC_CLEAR.jpg",
                    bank_type: "四大银行",
                    bank_name: "工商银行",
                    card_name: "Clear卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "AmericanExpress",
                    card_level: "Clear",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "已注销，纪念",
                    ex_ext: "",
                    back_color: "back_ICBC",
                    account_type: "单卡单户|多币种",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/ICBC_JCB_P.jpeg",
                    bank_type: "四大银行",
                    bank_name: "工商银行",
                    card_name: "JCB旅行白金卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "JCB",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_ICBC",
                    account_type: "单卡单户|多币种",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/BOB_CXK.jpg",
                    bank_type: "城商银行",
                    bank_name: "北京银行",
                    card_name: "储蓄卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡,已注销",
                    ex_ext: "",
                    back_color: "back_BOB",
                    account_type: "合并账户|人民币",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/BOB_GH.jpg",
                    bank_type: "城商银行",
                    bank_name: "北京银行",
                    card_name: "工会卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "",
                    back_color: "back_BOB",
                    account_type: "合并账户|人民币",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/BOB_GJJ.png",
                    bank_type: "城商银行",
                    bank_name: "北京银行",
                    card_name: "公积金卡",
                    loan: "1,000",
                    loan_splice: 0,
                    bill_date: "17",
                    card_union: "Union",
                    card_level: "Gold",
                    card_tax: "0",
                    card_tax_date: " - ",
                    tax_free: "有效期免年费",
                    tax_status: "已免",
                    ext: "近效期，不续卡",
                    ex_ext: "近效期，不续卡",
                    back_color: "back_BOB",
                    account_type: "合并账户|人民币",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/BOB_YH.jpeg",
                    bank_type: "城商银行",
                    bank_name: "北京银行",
                    card_name: "运河卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "已注销，纪念",
                    ex_ext: "",
                    back_color: "back_BOB",
                    account_type: "合并账户|人民币",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CGB_JL.jpg",
                    bank_type: "商业银行",
                    bank_name: "广发银行",
                    card_name: "锦鲤卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "Mastercard借记卡",
                    back_color: "back_CGB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CGB_LUCKY.jpg",
                    bank_type: "商业银行",
                    bank_name: "广发银行",
                    card_name: "Lucky卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "AmericanExpress",
                    card_level: "Member",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "AmericanExpress借记卡",
                    back_color: "back_CGB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CGB_ZSB.jpg",
                    bank_type: "商业银行",
                    bank_name: "广发银行",
                    card_name: "臻尚白金卡",
                    loan: "10,000",
                    loan_splice: 500,
                    bill_date: "24",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: "480",
                    card_tax_date: "06-26",
                    tax_free: "12次刷免",
                    tax_status: "已免",
                    ext: "4次高铁贵宾厅=2龙腾点",
                    ex_ext: "4次高铁贵宾厅,共2龙腾点仅用于高铁",
                    back_color: "back_CGB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CGB_DJB_0.jpg",
                    bank_type: "商业银行",
                    bank_name: "广发银行",
                    card_name: "鼎极白金卡（臻瑞版）",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "已注销，纪念",
                    ex_ext: "",
                    back_color: "back_CGB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CIB_HYRS.jpg",
                    bank_type: "商业银行",
                    bank_name: "兴业银行",
                    card_name: "寰宇人生卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "境外转账手续费优惠",
                    back_color: "back_CIB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CIB_YK.jpg",
                    bank_type: "商业银行",
                    bank_name: "兴业银行",
                    card_name: "行卡",
                    loan: "10,000",
                    loan_splice: 0,
                    bill_date: "10",
                    card_union: "AmericanExpress",
                    card_level: "Max",
                    card_tax: "900",
                    card_tax_date: "03-10",
                    tax_free: "900刚性收取",
                    tax_status: "已付",
                    ext: "12贵宾厅 4接送机",
                    ex_ext: "贵宾厅:12境内 无限境外； 接送机:4境内 2次境外",
                    back_color: "back_CIB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/SPDB_CX.jpg",
                    bank_type: "商业银行",
                    bank_name: "浦发银行",
                    card_name: "储蓄卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "II",
                    back_color: "back_SPDB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/SPDB_RVS.jpg",
                    bank_type: "商业银行",
                    bank_name: "浦发银行",
                    card_name: "红沙渲卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "Mastercard",
                    card_level: "World",
                    card_tax: "360",
                    card_tax_date: "05-24",
                    tax_free: "6次刷免",
                    tax_status: "已免",
                    ext: "",
                    ex_ext: "万事达世界卡",
                    back_color: "back_SPDB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/SPDB_NV.jpg",
                    bank_type: "商业银行",
                    bank_name: "浦发银行",
                    card_name: "新贵卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "AmericanExpress",
                    card_level: "Classic",
                    card_tax: "680",
                    card_tax_date: "05-24",
                    tax_free: "6次刷免",
                    tax_status: "已免",
                    ext: "",
                    ex_ext: "经典百夫长普卡",
                    back_color: "back_SPDB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/SPDB_NH.png",
                    bank_type: "商业银行",
                    bank_name: "浦发银行",
                    card_name: "南航联名卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: "360",
                    card_tax_date: "07-24",
                    tax_free: "6次刷免",
                    tax_status: "ing",
                    ext: "",
                    ex_ext: "15:1兑换南航积分",
                    back_color: "back_SPDB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/SPDB_DH.png",
                    bank_type: "商业银行",
                    bank_name: "浦发银行",
                    card_name: "东航联名卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: "360",
                    card_tax_date: "07-24",
                    tax_free: "6次刷免",
                    tax_status: "ing",
                    ext: "",
                    ex_ext: "15:1兑换东航积分",
                    back_color: "back_SPDB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_AIO.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "一卡通",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_HJK.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "花嫁卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "招行理财卡",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_MC_S.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "万事达金卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_MP.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "万事达白金卡",
                    loan: "60,000",
                    loan_splice: 2100,
                    bill_date: "24",
                    card_union: "Mastercard",
                    card_level: "Platinum",
                    card_tax: "800",
                    card_tax_date: "03-24",
                    tax_free: "8W刷免",
                    tax_status: "ing",
                    ext: "",
                    ex_ext: "300+酒店权益100积分,2次贵宾厅1999积分",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_COLLECTION.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "星座卡",
                    loan: "60,000",
                    loan_splice: 700,
                    bill_date: "24",
                    card_union: "Union",
                    card_level: "Gold",
                    card_tax: "300",
                    card_tax_date: " - ",
                    tax_free: "6次刷免",
                    tax_status: "已免",
                    ext: "",
                    ex_ext: "",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_AD.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "全币种",
                    loan: "60,000",
                    loan_splice: 0,
                    bill_date: "24",
                    card_union: "Visa",
                    card_level: "Signature",
                    card_tax: "0",
                    card_tax_date: " - ",
                    tax_free: "有效期免年费",
                    tax_status: "已免",
                    ext: "近效期，不续卡",
                    ex_ext: "近效期，不续卡",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_JDB.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "经典白",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union|Visa",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CMB_WORLD.jpg",
                    bank_type: "商业银行",
                    bank_name: "招商银行",
                    card_name: "世界卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "World",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CMB",
                    account_type: "合并账户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CEB_CXK.jpg",
                    bank_type: "商业银行",
                    bank_name: "光大银行",
                    card_name: "储蓄卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "2026-05后申请白金卡",
                    back_color: "back_CEB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CEB_CZB.jpg",
                    bank_type: "商业银行",
                    bank_name: "光大银行",
                    card_name: "车主白金卡",
                    loan: "5,0000",
                    loan_splice: 0,
                    bill_date: "10",
                    card_union: "AmericanExpress",
                    card_level: "Max",
                    card_tax: "500",
                    card_tax_date: "09-10",
                    tax_free: "10W积分",
                    tax_status: "ing",
                    ext: "主要权益卡",
                    ex_ext: "主要权益卡",
                    back_color: "back_CEB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "credit"
                },
                {
                    is_top: 0,
                    img: "img/card/CEB_ZQL.jpg",
                    bank_type: "商业银行",
                    bank_name: "光大银行",
                    card_name: "紫麒麟卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: "Platinum",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CEB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CEB_WORLDLITE.jpg",
                    bank_type: "商业银行",
                    bank_name: "光大银行",
                    card_name: "世界之极卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "World Elite",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: "",
                    tax_status: "",
                    ext: "收藏卡面,无此卡",
                    ex_ext: "收藏卡面,无此卡",
                    back_color: "back_CEB",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CITIC_MC.png",
                    bank_type: "商业银行",
                    bank_name: "中信银行",
                    card_name: "金貔貅卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Mastercard",
                    card_level: "Gold",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "万事达借记卡",
                    back_color: "back_CITIC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                },
                {
                    is_top: 0,
                    img: "img/card/CITIC_AMX.jpg",
                    bank_type: "商业银行",
                    bank_name: "中信银行",
                    card_name: "百夫长金卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "AmericanExpress",
                    card_level: "Classic",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "运通借记卡",
                    back_color: "back_CITIC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/CITIC_CX.png",
                    bank_type: "商业银行",
                    bank_name: "中信银行",
                    card_name: "储蓄卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡,已注销",
                    ex_ext: "II",
                    back_color: "back_CITIC",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "no"
                },
                {
                    is_top: 0,
                    img: "img/card/NS.jfif",
                    bank_type: "农商银行",
                    bank_name: "河北农商银行",
                    card_name: "储蓄卡",
                    loan: "0",
                    loan_splice: 0,
                    bill_date: " - ",
                    card_union: "Union",
                    card_level: " - ",
                    card_tax: " - ",
                    card_tax_date: " - ",
                    tax_free: " - ",
                    tax_status: " - ",
                    ext: "储蓄卡",
                    ex_ext: "计划注销",
                    back_color: "back_NS",
                    account_type: "单卡单户|人民币/美元",
                    is_on: "debit"
                }
            ];


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
