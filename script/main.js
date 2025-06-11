var vm = new Vue({
    el: '.containerMain',
    data: {
        link_sites: [],
        search_sites: [
            {
                index: 0,
                search_calss: 'firstFlowFirstColm searchengine',
                icon_class: 'nf nf-md-card_search search_logo',
                icon_color: 'color: #1E90FF;',
                name_txt: ' Baidu '
            },
            {
                index: 1,
                search_calss: 'firstFlowFirstColm searchengine mouseOn engon',
                icon_class: 'nf nf-md-microsoft_bing search_logo',
                icon_color: 'color: #20B2AA;',
                name_txt: ' Bing '
            },
            {
                index: 2,
                search_calss: 'firstFlowFirstColm searchengine',
                icon_class: 'nf nf-fa-google search_logo',
                icon_color: 'color: #EEAD0E;',
                name_txt: ' Google '
            },
        ],
        search_str: '',
        searchImgEx4_class: "col-xs-6 col-sm-4 firstFlowoo searchImgEx4",
        searchImgEx5_class: "col-xs-6 col-sm-5 firstFlowoo searchImgEx5",
        searchImg_class: "col-xs-6 col-sm-1 firstFlowcc searchImg",
        searchExCh_class: "col-xs-5 col-sm-3 firstFlow searchExCh",
        searchCh_class: "col-xs-5 col-sm-5 firstFlow searchCh",
        all_link_class: 'col-sm-4 col-md-2 firstFlow',
    },
    created: function () {
        var tittle_str = document.title
        this.methodToTrigger()
        this.createData('/files/' + tittle_str + '.json')
    },
    methods: {
        // 打开页面
        openPage: (url) => {
            window.open(url, "_blank");
            //window.open(url, "_self");
        },
        changePages: function (pageName) {
            this.createData('/files/' + pageName + '.json')
            if (pageName === 'home')
                this.all_link_class = 'col-sm-4 col-md-2 firstFlow'
            if (pageName === 'congya')
                this.all_link_class = 'col-sm-4 col-md-3 firstFlow'
            if (pageName === 'ssr')
                this.all_link_class = 'col-sm-4 col-md-3 firstFlow'
            if (pageName === 'work')
                this.all_link_class = 'col-sm-4 col-md-2 firstFlow_1'
        },
        getPagesStyle: function () {
            return this.all_link_class
        },
        // 搜索判断
        selectSearch: function (index) {
            for (var i = 0; i < this.search_sites.length; i++) {
                if (i == index) {
                    this.search_sites[i].search_calss = 'firstFlowFirstColm searchengine mouseOn engon'
                    continue
                }
                this.search_sites[i].search_calss = 'firstFlowFirstColm searchengine mouseOn'
            }
        },
        witchSearch: function () {
            flag = 0
            for (var i = 0; i < this.search_sites.length; i++) {
                if (this.search_sites[i].search_calss.indexOf("engon") != -1) flag = i
            }
            if (flag == 0) { window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + this.search_str, "_blank"); }
            if (flag == 1) { window.open("https://www.bing.com/search?q=" + this.search_str, "_blank"); }
            if (flag == 2) { window.open("https://www.google.com.hk/search?q=" + this.search_str, "_blank"); }
            this.search_str = ''
        },
        /* 初始化函数 */
        methodToTrigger: function () {
            var he = document.body.clientHeight;
            var wi = document.body.clientWidth;
            if (he < wi) { }
            else {
                this.searchImgEx4_class = 'col-xs-6 col-sm-3 firstFlowoo searchImgEx4'
                this.searchImgEx5_class = 'col-xs-6 firstFlowoo searchImgEx5'
                this.searchImg_class = "col-xs-6 col-sm-3 firstFlowcc searchImg"
                this.searchExCh_class = "col-xs-5 col-sm-1 firstFlow searchExCh"
                this.searchCh_class = "col-xs-5 col-sm-9 firstFlow searchCh"
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
                this.link_sites = res.body.data
            }, function () {
            })
        },
        createIndex: function (list_data) {
            for (var i = 0; i < list_data.length; i++) {
                list_data[i].index = i
            }
            return list_data
        }
    },
})

/* 天气模块 */
var weathertoday_v = new Vue({
    el: '#weathertoday',
    data: {
        weathertoday: '',
    },
    created: function () {
        this.getWeather()
    },
    methods: {
        getWeather: function () {
            this.$http.get('https://restapi.amap.com/v3/weather/weatherInfo?key=c4c1852df655e3f701e2989729041c23&city=110000&extensions=all').then(function (res) {
                this.info = res.body
                var obj = res.body
                var forecasts = obj['forecasts']
                var forecasts0 = forecasts[0]
                var casts = forecasts0['casts']
                var casts0 = casts[0]
                var tem1 = casts0['nighttemp_float']
                var tem2 = casts0['daytemp_float']
                var wea = casts0['dayweather']
                var datenow = casts0['date'] + " " + casts0['week']
                this.weathertoday = datenow + " | " + tem1 + "℃ ~ " + tem2 + "℃ | " + wea
            }, function () {
            })
        }
    },
})