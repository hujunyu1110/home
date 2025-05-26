$(document).ready(function () {
  data = [
    {
      index: "1 1",
      url: "./congya.html",
      icon_class: "nf nf-md-duck",
      icon_color: "#EEB422",
      name_txt: " Congya ",
      icon_str: "\udb80\udde5", //󰇥
    },
    {
      index: "1 2",
      url: "https://QuickConnect.cn/springduck",
      icon_class: "nf nf-md-nas",
      icon_color: "#7A8B8B",
      name_txt: " Synology ",
      icon_str: "\udb82\udcf3", //󰣳
    },
    {
      index: "1 3",
      url: "https://www.icloud.com.cn/",
      icon_class: "nf nf-dev-apple",
      icon_color: "#708090",
      name_txt: " iCloud ",
      icon_str: "\ue711", //
    },
    {
      index: "1 4",
      url: "https://www.office.com/",
      icon_class: "nf nf-md-microsoft_office",
      icon_color: "#EE4000",
      name_txt: " Office ",
      icon_str: "\udb80\udfc6", //󰏆
    },
    {
      index: "1 5",
      url: "https://tb.alicdn.com/snapshot/index.html",
      icon_class: "nf nf-fa-shopping_cart",
      icon_color: "#FF8C00",
      name_txt: " Taobao ",
      icon_str: "\uf07a", //
    },
    {
      index: "1 6",
      url: "https://www.xiaohongshu.com/explore",
      icon_class: "nf nf-md-book",
      icon_color: "#ff0000",
      name_txt: " Red ",
      icon_str: "\udb80\udcba", //󰂺
    },
    {
      index: "2 1",
      url: "https://www.bilibili.com/",
      icon_class: "nf nf-md-television_classic",
      icon_color: "#FF69B4",
      name_txt: " BiliBili ",
      icon_str: "\udb81\udff4", //󰟴
    },
    {
      index: "2 2",
      url: "https://mail.qq.com/",
      icon_class: "nf nf-oct-mail",
      icon_color: "#EEAD0E",
      name_txt: " QQMail ",
      icon_str: "\uf42f", //
    },
    {
      index: "2 3",
      url: "https://mp.weixin.qq.com",
      icon_class: "nf nf-md-wechat",
      icon_color: "#32CD32",
      name_txt: " WeChat ",
      icon_str: "\udb81\ude11", //󰘑
    },
    {
      index: "2 4",
      url: "https://gitee.com",
      icon_class: "nf nf-dev-git",
      icon_color: "#FF0000",
      name_txt: " Gitee ",
      icon_str: "\ue702", //
    },
    {
      index: "2 5",
      url: "https://next.itellyou.cn/",
      icon_class: "nf nf-custom-msdos",
      icon_color: "#32CD32",
      name_txt: " MSDN ",
      icon_str: "\ue629", //
    },
    {
      index: "2 6",
      url: "https://boardmix.cn/app/my-space",
      icon_class: "nf nf-md-developer_board",
      icon_color: "#BA55D3",
      name_txt: " BoardMix ",
      icon_str: "\udb81\ude97", //󰚗
    },
    {
      index: "3 1",
      url: "https://www.zhihu.com/",
      icon_class: "nf nf-fa-book",
      icon_color: "#2b8ef1",
      name_txt: " zhihu ",
      icon_str: "\uf02d", //
    },
    {
      index: "3 2",
      url: "https://app.apifox.com/main/teams/445141?tab=project",
      icon_class: "nf nf-md-microsoft_edge",
      icon_color: "#e403f893",
      name_txt: " AirFox ",
      icon_str: "\udb80\udde9", //󰇩
    },
    {
      index: "3 3",
      url: "https://martian-zodiac-871916.postman.co/home",
      icon_class: "nf nf-md-pac_man",
      icon_color: "#ff8800",
      name_txt: " Postman ",
      icon_str: "\udb82\udfaf", //󰮯
    },
    {
      index: "3 4",
      url: "https://console.cloud.tencent.com",
      icon_class: "nf nf-fae-cloud",
      icon_color: "#1E90FF",
      name_txt: " Tencent ",
      icon_str: "\udb80\udd5f", //
    },
    {
      index: "3 5",
      url: "./ssr.html",
      icon_class: "nf nf-fa-paper_plane",
      icon_color: "#48D1CC",
      name_txt: " SSR ",
      icon_str: "\uf1d9", //
    },
    {
      index: "3 6",
      url: "./work.html",
      icon_class: "nf nf-fae-medicine",
      icon_color: "#00BFFF",
      name_txt: " Work ",
      icon_str: "\ue221", //
    },
  ];

  for(var i = 0; i < data.length; i++){
    var new_el = '            <div class=\"col-md-2 col-sm-4 firstFlow\">\n'
    new_el = new_el + '                <div class=\"divhei\" style=\"padding-left: 2px;padding-right: 4px;padding-top: 2px;padding-bottom: 2px;\">\n'
    new_el = new_el + '                    <div class=\"firstFlowFirstColm mouseOn\" onclick=\"openPage(\'' + data[i].url + '\')\">\n'
    new_el = new_el + '                        <i class=\"' + data[i].icon_class +' icon_logo\" style=\"color: ' + data[i].icon_color + ';\"></i>\n'
    // new_el = new_el + '                        <p class=\"btntitle icon_logo\" style=\"color: ' + data[i].icon_color + ';\">'+ data[i].icon_str + '</p>\n'
    new_el = new_el + '                        <p class=\"btntitle\">'+ data[i].name_txt + '</p>\n'
    new_el = new_el + '                    </div>\n'
    new_el = new_el + '                </div>\n'
    new_el = new_el + '            </div>\n'
    $('#linklist').append(new_el)
  }

});
