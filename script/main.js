var vm = new Vue({
    el: '.containerMain', data: {
        link_sites: [],
        search_sites: [{
            index: 0,
            search_calss: 'firstFlowFirstColm searchengine',
            icon_class: 'nf nf-md-card_search search_logo',
            icon_color: 'color: #1E90FF;',
            name_txt: ' Baidu ',
            icon: "\f08f3",
        }, {
            index: 1,
            search_calss: 'firstFlowFirstColm searchengine mouseOn engon',
            icon_class: 'nf nf-md-microsoft_bing search_logo',
            icon_color: 'color: #20B2AA;',
            name_txt: ' Bing ',
            icon: "\f08f3",
        }, {
            index: 2,
            search_calss: 'firstFlowFirstColm searchengine',
            icon_class: 'nf nf-fa-google search_logo',
            icon_color: 'color: #EEAD0E;',
            name_txt: ' Google ',
            icon: "\f08f3",
        },],
        search_str: '',
        searchImgEx4_class: "col-xs-6 col-sm-4 firstFlowoo searchImgEx4",
        searchImgEx5_class: "col-xs-6 col-sm-5 firstFlowoo searchImgEx5",
        searchImg_class: "col-xs-6 col-sm-1 firstFlowcc searchImg",
        searchExCh_class: "col-xs-5 col-sm-3 firstFlow searchExCh",
        searchCh_class: "col-xs-5 col-sm-5 firstFlow searchCh",
        all_link_class: 'col-sm-4 col-md-2 firstFlow',
    }, created: function () {
        let tittle_str = document.title
        this.methodToTrigger()
        this.createData('/files/' + tittle_str + '.json')
    }, methods: {
        // 打开页面
        openPage: (url) => {
            window.open(url, "_blank");
            //window.open(url, "_self");
        }, changePages: function (pageName) {
            this.createData('/files/' + pageName + '.json')
            if (pageName === 'home') this.all_link_class = 'col-sm-4 col-md-2 firstFlow'
            if (pageName === 'congya') this.all_link_class = 'col-sm-4 col-md-3 firstFlow'
            if (pageName === 'ssr') this.all_link_class = 'col-sm-4 col-md-3 firstFlow'
            if (pageName === 'work') this.all_link_class = 'col-sm-4 col-md-2 firstFlow_1'
        }, getPagesStyle: function () {
            return this.all_link_class
        }, // 搜索判断
        selectSearch: function (index) {
            for (let i = 0; i < this.search_sites.length; i++) {
                if (i === index) {
                    this.search_sites[i].search_calss = 'firstFlowFirstColm searchengine mouseOn engon'
                    continue
                }
                this.search_sites[i].search_calss = 'firstFlowFirstColm searchengine mouseOn'
            }
        }, witchSearch: function () {
            let flag = 0
            for (let i = 0; i < this.search_sites.length; i++) {
                if (this.search_sites[i].search_calss.indexOf("engon") !== -1) flag = i
            }
            if (flag === 0) {
                window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + this.search_str, "_blank");
            }
            if (flag === 1) {
                window.open("https://www.bing.com/search?q=" + this.search_str, "_blank");
            }
            if (flag === 2) {
                window.open("https://www.google.com.hk/search?q=" + this.search_str, "_blank");
            }
            this.search_str = ''
        }, /* 初始化函数 */
        methodToTrigger: function () {
            let he = document.body.clientHeight;
            let wi = document.body.clientWidth;
            if (he < wi) {
            } else {
                this.searchImgEx4_class = 'col-xs-6 col-sm-3 firstFlowoo searchImgEx4'
                this.searchImgEx5_class = 'col-xs-6 firstFlowoo searchImgEx5'
                this.searchImg_class = "col-xs-6 col-sm-3 firstFlowcc searchImg"
                this.searchExCh_class = "col-xs-5 col-sm-1 firstFlow searchExCh"
                this.searchCh_class = "col-xs-5 col-sm-9 firstFlow searchCh"
            }
        }, createJson: function () {
            let json_obj = {data: this.link_sites}
            console.log(JSON.stringify(json_obj))
        }, // 初始化数组及序号
        createData: function (url) {
            this.$http.get(url).then(function (res) {
                let data = res.body.data
                data = this.createIndex(data)
                this.link_sites = data
            }, function () {
            })
        }, createIndex: function (list_data) {
            for (let i = 0; i < list_data.length; i++) {
                list_data[i].index = i
            }
            return list_data
        }
    },
})

/* 天气模块 */
var weathertoday_v = new Vue({
    el: '#weathertoday', data: {
        weathertoday: '', currentTime: '',
    }, created: function () {
        this.getWeather()
    }, mounted() {
        // 每秒更新一次时间
        this.timer = setInterval(this.updateTime, 1000);
    }, beforeDestroy() {
        // 清除定时器，避免内存泄漏
        clearInterval(this.timer);
    }, methods: {
        getCurrentTime: function () {
            let now = new Date();
            let year = now.getFullYear()
            let month = ('0' + (now.getMonth() + 1)).slice(-2)
            let day = ('0' + now.getDate()).slice(-2)
            let hours = ('0' + now.getHours()).slice(-2)
            let minutes = ('0' + now.getMinutes()).slice(-2)
            let seconds = ('0' + now.getSeconds()).slice(-2)
            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
        }, updateTime() {
            this.currentTime = this.getCurrentTime();
        }, getWeather: function () {
            this.$http.get('https://restapi.amap.com/v3/weather/weatherInfo?key=c4c1852df655e3f701e2989729041c23&city=110000&extensions=all').then(function (res) {
                this.info = res.body
                let obj = res.body
                let forecasts = obj['forecasts']
                let forecasts0 = forecasts[0]
                let casts = forecasts0['casts']
                let casts0 = casts[0]
                let tem1 = casts0['nighttemp_float']
                let tem2 = casts0['daytemp_float']
                let wea = casts0['dayweather']
                let datenow = casts0['week']
                if(datenow === '1') datenow = '  Mon'
                if(datenow === '2') datenow = '  Tue'
                if(datenow === '3') datenow = '  Wen'
                if(datenow === '4') datenow = '  Thu'
                if(datenow === '5') datenow = '  Fri'
                if(datenow === '6') datenow = '  Sat'
                if(datenow === '7') datenow = '  Sun'
                this.weathertoday = datenow + " | " + tem1 + "℃ ~ " + tem2 + "℃ | " + wea
            }, function () {
            })
        }
    },
})
var openDiv = new Vue({
    el: '#holiday',
    methods: {
        openPage: (url) => {
            window.open(url, "_blank");
            //window.open(url, "_self");
        },
    }
})