$(document).ready(function () {
  data = [
    {
      index: '1 1',
      url: './congya.html',
      icon_class: 'nf nf-md-duck',
      icon_color: '#EEB422',
      name_txt: ' Congya '
    },
    {
      index: '1 2',
      url: 'https://QuickConnect.cn/springduck',
      icon_class: 'nf nf-md-nas',
      icon_color: '#7A8B8B',
      name_txt: ' Synology '
    },
    {
      index: '1 3',
      url: 'https://www.icloud.com.cn/',
      icon_class: 'nf nf-dev-apple',
      icon_color: '#708090',
      name_txt: ' iCloud '
    },
    {
      index: '1 4',
      url: 'https://www.office.com/',
      icon_class: 'nf nf-md-microsoft_office',
      icon_color: '#EE4000',
      name_txt: ' Office '
    },    {
      index: '1 5',
      url: 'https://tb.alicdn.com/snapshot/index.html',
      icon_class: 'nf nf-fa-shopping_cart',
      icon_color: '#FF8C00',
      name_txt: ' Taobao '
    },
    {
      index: '1 6',
      url: 'https://www.xiaohongshu.com/explore',
      icon_class: 'nf nf-md-book',
      icon_color: '#ff0000',
      name_txt: ' Red '
    },
        {
      index: '2 1',
      url: 'https://www.bilibili.com/',
      icon_class: 'nf nf-md-television_classic',
      icon_color: '#FF69B4',
      name_txt: ' BiliBili '
    },
    {
      index: '2 2',
      url: 'https://mail.qq.com/',
      icon_class: 'nf nf-oct-mail',
      icon_color: '#EEAD0E',
      name_txt: ' QQMail '
    },
    {
      index: '2 3',
      url: 'https://mp.weixin.qq.com',
      icon_class: 'nf nf-md-wechat',
      icon_color: '#32CD32',
      name_txt: ' WeChat '
    },
    {
      index: '2 4',
      url: 'https://gitee.com',
      icon_class: 'nf nf-dev-git',
      icon_color: '#FF0000',
      name_txt: ' Gitee '
    },    {
      index: '2 5',
      url: 'https://next.itellyou.cn/',
      icon_class: 'nf nf-custom-msdos',
      icon_color: '#32CD32',
      name_txt: ' MSDN '
    },
    {
      index: '2 6',
      url: 'https://boardmix.cn/app/my-space',
      icon_class: 'nf nf-md-developer_board',
      icon_color: '#BA55D3',
      name_txt: ' BoardMix '
    },
        {
      index: '3 1',
      url: 'https://www.zhihu.com/',
      icon_class: 'nf nf-fa-book',
      icon_color: '#2b8ef1',
      name_txt: ' zhihu '
    },
    {
      index: '3 2',
      url: 'https://app.apifox.com/main/teams/445141?tab=project',
      icon_class: 'nf nf-md-microsoft_edge',
      icon_color: '#e403f893',
      name_txt: ' AirFox '
    },
    {
      index: '3 3',
      url: 'https://martian-zodiac-871916.postman.co/home',
      icon_class: 'nf nf-md-pac_man',
      icon_color: '#ff8800',
      name_txt: ' Postman '
    },
    {
      index: '3 4',
      url: 'https://console.cloud.tencent.com',
      icon_class: 'nf nf-fae-cloud',
      icon_color: '#1E90FF',
      name_txt: ' Tencent '
    },    {
      index: '3 5',
      url: './ssr.html',
      icon_class: 'nf nf-md-vpn',
      icon_color: '#48D1CC',
      name_txt: ' SSR '
    },
    {
      index: '3 6',
      url: './sph.html',
      icon_class: 'nf nf-fae-medicine',
      icon_color: '#00BFFF',
      name_txt: ' Work '
    },
  ]


  for(var i = 0; i < data.length; i++){
    var new_el = '            <div class=\"col-md-2 col-sm-4 firstFlow\">\n'
    new_el = new_el + '                <div class=\"divhei\" style=\"padding-left: 2px;padding-right: 4px;padding-top: 2px;padding-bottom: 2px;\">\n'
    new_el = new_el + '                    <div class=\"firstFlowFirstColm mouseOn\" onclick=\"openPage(\'' + data[i].url + '\')\">\n'
    new_el = new_el + '                        <i class=\"' + data[i].icon_class +'\" style=\"color: ' + data[i].icon_color + ';\"></i>\n'
    new_el = new_el + '                        <p class=\"btntitle\">'+ data[i].name_txt + '</p>\n'
    new_el = new_el + '                    </div>\n'
    new_el = new_el + '                </div>\n'
    new_el = new_el + '            </div>\n'
    $('#linklist').append(new_el)
  }
})
