$(document).ready(function () {
  data = [
    {
      index: '1 1',
      url: 'http://192.168.1.1',
      icon_class: 'nf nf-md-router_wireless_settings',
      icon_color: '#FF0000',
      name_txt: ' Wo-Model '
    },
    {
      index: '1 2',
      url: 'http://192.168.31.1',
      icon_class: 'nf nf-md-router_wireless',
      icon_color: '#EE9A00',
      name_txt: ' Mi-Rounter '
    },
    {
      index: '1 3',
      url: 'https://hujunyu1110.github.io/loveIting/',
      icon_class: 'nf nf-md-duck',
      icon_color: '#FFA07A',
      name_txt: ' loveiting '
    },    
    {
      index: '1 4',
      url: 'https://hujunyu1110.github.io/ToDoList/',
      icon_class: 'nf nf-md-duck',
      icon_color: '#6B8E23',
      name_txt: ' Calender '
    },
    {
      index: '2 1',
      url: 'https://hujunyu1110.github.io/AnalysisMS/',
      icon_class: 'nf nf-md-duck',
      icon_color: '#EE3B3B',
      name_txt: ' AnalysisMS '
    },
    {
      index: '2 2',
      url: 'https://QuickConnect.cn/springduck',
      icon_class: 'nf nf-md-nas',
      icon_color: '#00BFFF',
      name_txt: ' Synology Quick '
    },
    {
      index: '2 3',
      url: 'http://192.168.31.52:5000',
      icon_class: 'nf nf-md-nas',
      icon_color: '#EE9A00',
      name_txt: ' Synology Local '
    },
  ]


  for(var i = 0; i < data.length; i++){
    var new_el = '            <div class=\"col-sm-4 col-md-3 firstFlow\">\n'
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
