var vm = new Vue({
  el: '.containerMain',
  data: {
    // link_sites: [
    //   {
    //     index: '1 1',
    //     url: 'http://192.168.1.1',
    //     icon_class: 'icon_logo nf nf-md-router_wireless_settings',
    //     icon_color: 'color: #FF0000',
    //     name_txt: ' Wo-Model ',
    //   },
    //   {
    //     index: '1 2',
    //     url: 'http://192.168.31.1',
    //     icon_class: 'icon_logo nf nf-md-router_wireless',
    //     icon_color: 'color: #EE9A00',
    //     name_txt: ' Mi-Rounter ',
    //   },
    //   {
    //     index: '1 3',
    //     url: 'https://hujunyu1110.github.io/loveIting/',
    //     icon_class: 'icon_logo nf nf-md-duck',
    //     icon_color: 'color: #FFA07A',
    //     name_txt: ' loveiting ',
    //   },
    //   {
    //     index: '1 4',
    //     url: 'https://hujunyu1110.github.io/ToDoList/',
    //     icon_class: 'icon_logo nf nf-md-duck',
    //     icon_color: 'color: #6B8E23',
    //     name_txt: ' Calender ',
    //   },
    //   {
    //     index: '2 1',
    //     url: 'https://hujunyu1110.github.io/AnalysisMS/',
    //     icon_class: 'icon_logo nf nf-md-duck',
    //     icon_color: 'color: #EE3B3B',
    //     name_txt: ' AnalysisMS ',
    //   },
    //   {
    //     index: '2 2',
    //     url: 'https://QuickConnect.cn/springduck',
    //     icon_class: 'icon_logo nf nf-md-nas',
    //     icon_color: 'color: #00BFFF',
    //     name_txt: ' Synology Quick ',
    //   },
    //   {
    //     index: '2 3',
    //     url: 'http://192.168.31.52:5000',
    //     icon_class: 'icon_logo nf nf-md-nas',
    //     icon_color: 'color: #EE9A00',
    //     name_txt: ' Synology Local ',
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
    this.createData('/files/congya.json')
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