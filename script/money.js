setCookie = (cname, cvalue, exdays) => {
    let d = new Date()
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000)
    let expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + "; " + expires
}
getCookie = (cname) => {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) === " ") c = c.substring(1);
        if (c.indexOf(name) !== -1) return c.substring(name.length, c.length)
    }
    return ""
};
clearCookie = (name) => {
    this.setCookie(name, "", -1)
}
checkCookie = () => {
    let user = this.getCookie("username");
    if (user !== "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "")
        if (user !== "" && user != null) {
            this.setCookie("username", user, 365)
        }
    }
}


const now = new Date()
const year = now.getFullYear()
const month = ('0' + (now.getMonth() + 1)).slice(-2)
const day = ('0' + now.getDate()).slice(-2)
const hours = ('0' + now.getHours()).slice(-2)
const minutes = ('0' + now.getMinutes()).slice(-2)
const seconds = ('0' + now.getSeconds()).slice(-2)
const todayDate = year + '-' + month + '-' + day;


var vm = new Vue({
    el: "#app",
    data: {
        moneyList: [],
    },
    created: function () {
        this.getMoney2m()
    },
    methods: {
        getMoney2m: function () {
            console.log("查询本地数据");
            // let money2M = getCookie("money")
            let money2M = localStorage.getItem("money")

            if (money2M === "" || money2M === null || typeof money2M === "undefined") {
                console.log('本地无可以用数据')
                this.getNewMoney2m()
            }
            else {
                let money = JSON.parse(money2M) //res.body
                let code = money["code"]
                if (code === 1) {
                    let dataDate = money["data"]["updateTime"].substring(0, 10)
                    if (dataDate === todayDate) {
                        console.log('使用本地数据')
                        this.moneyList = this.createIndex(money)
                    }
                    else {
                        console.log('本地数据已过期')
                        this.getNewMoney2m()
                    }
                } else {
                    alert('请求汇率数据过于频繁请稍后刷新进入！')
                    console.log('本地数据错误')
                    this.getNewMoney2m()
                }
            }
        },
        getNewMoney2m: function () {
            console.log("请求新汇率数据")
            this.$http
                .get(
                    "https://www.mxnzp.com/api/exchange_rate/list/v2?app_id=bxnurqmkpdmwoo7s&app_secret=Q4MroRCJQxBHSCxSYjSShmS4qiSHQ1B0"
                )
                .then(
                    function (res) {
                        // setCookie("money", JSON.stringify(res.body), 1)
                        localStorage.setItem("money", JSON.stringify(res.body))
                        let money = res.body
                        this.moneyList = this.createIndex(money)
                    },
                    function () { }
                )
        },
        // Just input res.body
        createIndex: function (list_data) {
            list_data = this.parseMoney(list_data)
            for (let i = 0; i < list_data.length; i++) {
                list_data[i].index = i;
                list_data[i].cny_str = "";
                list_data[i].for_str = "";
            }
            return list_data;
        },
        parseMoney: function (money) {
            let moneyList = [];
            let data = money["data"];
            moneyList = data["list"];
            return moneyList;
        },
        CNYInput: function (index) {
            if ("CNY" === this.moneyList[index].to) {
                if ("100JPY/CNY" === this.moneyList[index].name) {
                    this.moneyList[index].for_str = (
                        (this.moneyList[index].cny_str / this.moneyList[index].price) *
                        100
                    ).toFixed(2);
                } else {
                    this.moneyList[index].for_str = (
                        this.moneyList[index].cny_str / this.moneyList[index].price
                    ).toFixed(2);
                }
            } else {
                this.moneyList[index].for_str = (
                    this.moneyList[index].cny_str * this.moneyList[index].price
                ).toFixed(2);
            }
        },
        FORNInput: function (index) {
            if ("CNY" === this.moneyList[index].to) {
                if ("100JPY/CNY" === this.moneyList[index].name) {
                    this.moneyList[index].cny_str = (
                        (this.moneyList[index].for_str * this.moneyList[index].price) /
                        100
                    ).toFixed(2);
                } else {
                    this.moneyList[index].cny_str = (
                        this.moneyList[index].for_str * this.moneyList[index].price
                    ).toFixed(2);
                }
            } else {
                this.moneyList[index].cny_str = (
                    this.moneyList[index].for_str / this.moneyList[index].price
                ).toFixed(2);
            }
        },
    },
});
