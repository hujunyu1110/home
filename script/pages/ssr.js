var vm = new Vue({
  el: '.containerMain',
  data: {
    // link_sites: [
    //   {
    //     index: '1 1',
    //     url: 'https://twitter.com/home',
    //     icon_class: 'icon_logo nf nf-cod-twitter',
    //     icon_color: 'color: #1E90FF;',
    //     name_txt: ' Twitter '
    //   },
    //   {
    //     index: '1 2',
    //     url: 'https://www.pixiv.net/',
    //     icon_class: 'icon_logo nf nf-md-alpha_p_box',
    //     icon_color: 'color: #1E90FF;',
    //     name_txt: ' Pixiv '
    //   },
    //   {
    //     index: '1 3',
    //     url: 'https://www.instagram.com/',
    //     icon_class: 'icon_logo nf nf-md-instagram',
    //     icon_color: 'background: linear-gradient(to bottom,rgb(204, 50, 191), #FF4040,rgb(255, 196, 0));-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
    //     name_txt: ' Instagram '
    //   },
    //   {
    //     index: '1 4',
    //     url: 'https://www.pinterest.com/',
    //     icon_class: 'icon_logo nf nf-fa-pinterest_p',
    //     icon_color: 'color: #FF0000;',
    //     name_txt: ' Pinterest '
    //   },
    //   {
    //     index: '2 1',
    //     url: 'https://www.google.com.hk/',
    //     icon_class: 'icon_logo nf nf-md-google',
    //     icon_color: 'background: linear-gradient(to bottom right, rgba(0, 119, 255, 0.85), #FF4040, #FFA500, #00FF00);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
    //     name_txt: ' Google '
    //   },
    //   {
    //     index: '2 2',
    //     url: 'https://mail.google.com/mail/',
    //     icon_class: 'icon_logo nf nf-md-gmail',
    //     icon_color: 'background: linear-gradient(to bottom right,rgba(0, 119, 255, 0.85), #FF0000, #FFA500, #00FF00);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;',
    //     name_txt: ' GMail '
    //   },
    //   {
    //     index: '2 3',
    //     url: 'https://www.youtube.com',
    //     icon_class: 'icon_logo nf nf-fa-youtube',
    //     icon_color: 'color: #FF4500;',
    //     name_txt: ' Youtube '
    //   },
    //   {
    //     index: '2 4',
    //     url: 'https://www.twitch.tv/?lang=zh-CN',
    //     icon_class: 'icon_logo nf nf-md-twitch',
    //     icon_color: 'color: #96028e;',
    //     name_txt: ' Twitch '
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
    this.createData('/files/ssr.json')
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