var vm = new Vue({
  el: '.containerMain',
  data: {
    // link_sites: [
    //   {
    //     index: "1 1",
    //     url: "./congya.html",
    //     icon_class: "icon_logo nf nf-md-duck",
    //     icon_color: "color: #EEB422",
    //     name_txt: " Congya ",
    //   },
    //   {
    //     index: "1 2",
    //     url: "https://QuickConnect.cn/springduck",
    //     icon_class: "icon_logo nf nf-md-nas",
    //     icon_color: "color: #7A8B8B",
    //     name_txt: " Synology ",
    //   },
    //   {
    //     index: "1 3",
    //     url: "https://www.icloud.com.cn/",
    //     icon_class: "icon_logo nf nf-dev-apple",
    //     icon_color: "color: #708090",
    //     name_txt: " iCloud ",
    //   },
    //   {
    //     index: "1 4",
    //     url: "https://www.office.com/",
    //     icon_class: "icon_logo nf nf-md-microsoft_office",
    //     icon_color: "color: #EE4000",
    //     name_txt: " Office ",
    //   },
    //   {
    //     index: "1 5",
    //     url: "https://tb.alicdn.com/snapshot/index.html",
    //     icon_class: "icon_logo nf nf-fa-shopping_cart",
    //     icon_color: "color: #FF8C00",
    //     name_txt: " Taobao ",
    //   },
    //   {
    //     index: "1 6",
    //     url: "https://www.xiaohongshu.com/explore",
    //     icon_class: "icon_logo nf nf-md-book",
    //     icon_color: "color: #ff0000",
    //     name_txt: " Red ",
    //   },
    //   {
    //     index: "2 1",
    //     url: "https://www.bilibili.com/",
    //     icon_class: "icon_logo nf nf-md-television_classic",
    //     icon_color: "color: #FF69B4",
    //     name_txt: " BiliBili ",
    //   },
    //   {
    //     index: "2 2",
    //     url: "https://mail.qq.com/",
    //     icon_class: "icon_logo nf nf-oct-mail",
    //     icon_color: "color: #EEAD0E",
    //     name_txt: " QQMail ",
    //   },
    //   {
    //     index: "2 3",
    //     url: "https://mp.weixin.qq.com",
    //     icon_class: "icon_logo nf nf-md-wechat",
    //     icon_color: "color: #32CD32",
    //     name_txt: " WeChat ",
    //   },
    //   {
    //     index: "2 4",
    //     url: "https://gitee.com",
    //     icon_class: "icon_logo nf nf-dev-git",
    //     icon_color: "color: #FF0000",
    //     name_txt: " Gitee ",
    //   },
    //   {
    //     index: "2 5",
    //     url: "./card.html",
    //     icon_class: "icon_logo nf nf-cod-credit_card",
    //     icon_color: "color:rgb(216, 199, 46)",
    //     name_txt: " Card ",
    //   },
    //   {
    //     index: "2 6",
    //     url: "https://boardmix.cn/app/my-space",
    //     icon_class: "icon_logo nf nf-md-developer_board",
    //     icon_color: "color: #BA55D3",
    //     name_txt: " BoardMix ",
    //   },
    //   {
    //     index: "3 1",
    //     url: "https://www.zhihu.com/",
    //     icon_class: "icon_logo nf nf-fa-book",
    //     icon_color: "color: #2b8ef1",
    //     name_txt: " zhihu ",
    //   },
    //   {
    //     index: "3 2",
    //     url: "https://app.apifox.com/main/teams/445141?tab=project",
    //     icon_class: "icon_logo nf nf-md-microsoft_edge",
    //     icon_color: "color: #e403f893",
    //     name_txt: " AirFox ",
    //   },
    //   {
    //     index: "3 3",
    //     url: "https://martian-zodiac-871916.postman.co/home",
    //     icon_class: "icon_logo nf nf-md-pac_man",
    //     icon_color: "color: #ff8800",
    //     name_txt: " Postman ",
    //   },
    //   {
    //     index: "3 4",
    //     url: "https://console.cloud.tencent.com",
    //     icon_class: "icon_logo nf nf-fae-cloud",
    //     icon_color: "color: #1E90FF",
    //     name_txt: " Tencent ",
    //   },
    //   {
    //     index: "3 5",
    //     url: "./ssr.html",
    //     icon_class: "icon_logo nf nf-fa-paper_plane",
    //     icon_color: "color: #48D1CC",
    //     name_txt: " SSR ",
    //   },
    //   {
    //     index: "3 6",
    //     url: "./work.html",
    //     icon_class: "icon_logo nf nf-fae-medicine",
    //     icon_color: "color: #00BFFF",
    //     name_txt: " Work ",
    //   },
    // ],
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
  },
  created: function () {
    this.methodToTrigger()
    // this.createJson()
    this.createData('/files/index.json')
  },
  methods: {
    openPage: (url) => {
      window.open(url, "_blank");
      //window.open(url, "_self");
    },
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
      for (var i; i < this.search_sites.length; i++) {
        if (this.search_sites[i].search_calss.indexOf("engon") != -1) flag = index
      }
      if (flag = 0) { window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + this.search_str, "_blank"); }
      if (flag = 1) { window.open("https://www.bing.com/search?q=" + this.search_str, "_blank"); }
      if (flag = 2) { window.open("https://www.google.com.hk/search?q=" + this.search_str, "_blank"); }
      this.search_str = ''
    },
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
    createData: function (url) {
      this.$http.get(url).then(function (res) {
        // console.log(res.body.data)
        this.link_sites = res.body.data
      }, function () {
      })
    },
  },
})

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