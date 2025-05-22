$(document).ready(function () {
  data = [
    {
      index: '1 1',
      url: 'https://twitter.com/home',
      icon_class: 'nf nf-cod-twitter',
      icon_color: '#1E90FF',
      name_txt: ' Twitter '
    },
    {
      index: '1 2',
      url: 'https://www.pixiv.net/',
      icon_class: 'nf nf-md-alpha_p_box',
      icon_color: '#4682B4',
      name_txt: ' Pixiv '
    },
    {
      index: '1 3',
      url: 'https://www.instagram.com/',
      icon_class: 'nf nf-md-instagram',
      icon_color: '#EE6363',
      name_txt: ' Instagram '
    },    
    {
      index: '1 4',
      url: 'https://www.pinterest.com/',
      icon_class: 'nf nf-fa-pinterest_p',
      icon_color: '#FF0000',
      name_txt: ' Pinterest '
    },
    {
      index: '2 1',
      url: 'https://www.google.com.hk/',
      icon_class: 'nf nf-md-google',
      icon_color: '#FF7F24',
      name_txt: ' Google '
    },
    {
      index: '2 2',
      url: 'https://mail.google.com/mail/',
      icon_class: 'nf nf-md-gmail',
      icon_color: '#228B22',
      name_txt: ' GMail '
    },
    {
      index: '2 3',
      url: 'https://www.youtube.com',
      icon_class: 'nf nf-fa-youtube',
      icon_color: '#FF4500',
      name_txt: ' Youtube '
    },
    {
      index: '2 4',
      url: 'https://www.twitch.tv/?lang=zh-CN',
      icon_class: 'nf nf-md-twitch',
      icon_color: '#96028e',
      name_txt: ' Twitch '
    }
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
