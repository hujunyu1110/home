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
        //this.createData('/files/' + tittle_str + '.json')
        this.createData(tittle_str)
    }, methods: {
        // 打开页面
        openPage: (url) => {
            window.open(url, "_blank");
            //window.open(url, "_self");
        }, changePages: function (pageName) {
            //this.createData('/files/' + pageName + '.json')
            this.createData(pageName)
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
            let json_obj = { data: this.link_sites }
            console.log(JSON.stringify(json_obj))
        }, // 初始化数组及序号
        createData: function (url) {
            /*
            this.$http.get(url).then(function (res) {
                let data = res.body.data
                data = this.createIndex(data)
                this.link_sites = data
            }, function () {
            })
            */
            if (url === 'home') {
                this.link_sites = [
                    {
                        index: "1 2",
                        url: "https://QuickConnect.cn/springduck",
                        icon_class: "icon_logo nf nf-md-nas",
                        icon_color: "color: #7A8B8B",
                        name_txt: " Synology ",
                        icon: "\udb82\udcf3"
                    },
                    {
                        index: "1 3",
                        url: "https://www.icloud.com.cn/",
                        icon_class: "icon_logo nf nf-dev-apple",
                        icon_color: "color: #708090",
                        name_txt: " iCloud ",
                        icon: "\\e711"
                    },
                    {
                        index: "1 4",
                        url: "https://www.office.com/",
                        icon_class: "icon_logo nf nf-md-microsoft_office",
                        icon_color: "color: #EE4000",
                        name_txt: " Office ",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 5",
                        url: "https://tb.alicdn.com/snapshot/index.html",
                        icon_class: "icon_logo nf nf-fa-shopping_cart",
                        icon_color: "color: #FF8C00",
                        name_txt: " Taobao ",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 6",
                        url: "https://www.xiaohongshu.com/explore",
                        icon_class: "icon_logo nf nf-md-book",
                        icon_color: "color: #ff0000",
                        name_txt: " Red ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 1",
                        url: "https://www.bilibili.com/",
                        icon_class: "icon_logo nf nf-md-television_classic",
                        icon_color: "color: #FF69B4",
                        name_txt: " BiliBili ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 2",
                        url: "https://mail.qq.com/",
                        icon_class: "icon_logo nf nf-oct-mail",
                        icon_color: "color: #EEAD0E",
                        name_txt: " QQMail ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 3",
                        url: "https://mp.weixin.qq.com",
                        icon_class: "icon_logo nf nf-md-wechat",
                        icon_color: "color: #32CD32",
                        name_txt: " WeChat ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "https://gitee.com",
                        icon_class: "icon_logo nf nf-dev-git",
                        icon_color: "color: #FF0000",
                        name_txt: " Gitee ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "https://github.com/",
                        icon_class: "icon_logo nf nf-cod-github",
                        icon_color: "color: #1f2328",
                        name_txt: " GitHub ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 5",
                        url: "./countMoney.html",
                        icon_class: "icon_logo nf nf-cod-credit_card",
                        icon_color: "color:rgb(216, 199, 46)",
                        name_txt: " Card ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 6",
                        url: "https://boardmix.cn/app/my-space",
                        icon_class: "icon_logo nf nf-md-developer_board",
                        icon_color: "color: #BA55D3",
                        name_txt: " BoardMix ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 1",
                        url: "https://www.zhihu.com/",
                        icon_class: "icon_logo nf nf-fa-book",
                        icon_color: "color: #2b8ef1",
                        name_txt: " Zhihu ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 2",
                        url: "https://app.apifox.com/main/teams/445141?tab=project",
                        icon_class: "icon_logo nf nf-md-microsoft_edge",
                        icon_color: "color: #e403f893",
                        name_txt: " AirFox ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 3",
                        url: "https://martian-zodiac-871916.postman.co/home",
                        icon_class: "icon_logo nf nf-md-pac_man",
                        icon_color: "color: #ff8800",
                        name_txt: " Postman ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 4",
                        url: "https://console.cloud.tencent.com",
                        icon_class: "icon_logo nf nf-fae-cloud",
                        icon_color: "color: #1E90FF",
                        name_txt: " Tencent ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 5",
                        url: "https://worldofwarships.asia/zh-sg/",
                        icon_class: "icon_logo nf nf-md-anchor",
                        icon_color: "color: #01aab0",
                        name_txt: " Wows ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 6",
                        url: "https://www.kimi.com/",
                        icon_class: "icon_logo nf nf-md-assistant",
                        icon_color: "color: #666666",
                        name_txt: " Kimi ",
                        icon: "\f08f3"
                    }
                ]
            }
            if (url === 'congya') {
                this.link_sites = [
                    {
                        index: "1 1",
                        url: "http://192.168.1.1",
                        icon_class: "icon_logo nf nf-md-router_wireless_settings",
                        icon_color: "color: #FF0000",
                        name_txt: " Wo-Model "
                    },
                    {
                        index: "1 2",
                        url: "http://192.168.31.1",
                        icon_class: "icon_logo nf nf-md-router_wireless",
                        icon_color: "color: #EE9A00",
                        name_txt: " Mi-Rounter "
                    },
                    {
                        index: "1 3",
                        url: "https://hujunyu1110.github.io/loveIting/",
                        icon_class: "icon_logo nf nf-md-duck",
                        icon_color: "color: #FFA07A",
                        name_txt: " loveiting "
                    },
                    {
                        index: "1 4",
                        url: "https://hujunyu1110.github.io/ToDoList/",
                        icon_class: "icon_logo nf nf-md-duck",
                        icon_color: "color: #6B8E23",
                        name_txt: " Calender "
                    },
                    {
                        index: "2 1",
                        url: "https://hujunyu1110.github.io/AnalysisMS/",
                        icon_class: "icon_logo nf nf-md-duck",
                        icon_color: "color: #EE3B3B",
                        name_txt: " AnalysisMS "
                    },
                    {
                        index: "2 2",
                        url: "https://QuickConnect.cn/springduck",
                        icon_class: "icon_logo nf nf-md-nas",
                        icon_color: "color: #00BFFF",
                        name_txt: " Synology Quick "
                    },
                    {
                        index: "2 3",
                        url: "http://192.168.31.52:5000",
                        icon_class: "icon_logo nf nf-md-nas",
                        icon_color: "color: #EE9A00",
                        name_txt: " Synology Local "
                    },
                    {
                        index: "2 3",
                        url: "http://lounylalala.top:5244",
                        icon_class: "icon_logo nf nf-md-google_drive",
                        icon_color: "color: #70c6be",
                        name_txt: " Alist "
                    },
                    {
                        index: "2 3",
                        url: "http://lounylalala.top:1880",
                        icon_class: "icon_logo nf nf-md-nodejs",
                        icon_color: "color: #EE9A00",
                        name_txt: " Node-Red "
                    },
                    {
                        index: "2 3",
                        url: "http://lounylalala.top:5500",
                        icon_class: "icon_logo nf nf-md-microsoft_visual_studio_code",
                        icon_color: "color: #22a7f2",
                        name_txt: " Live Server "
                    },
                    {
                        index: "3 4",
                        url: "https://console.cloud.tencent.com",
                        icon_class: "icon_logo nf nf-fae-cloud",
                        icon_color: "color: #1E90FF",
                        name_txt: " Tencent ",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 4",
                        url: "https://home.console.aliyun.com/home/dashboard",
                        icon_class: "icon_logo nf nf-fae-cloud",
                        icon_color: "color: #ff6a00",
                        name_txt: " Aliyun ",
                        icon: "\f08f3"
                    }
                ]
            }
            if (url === 'ssr') {
                this.link_sites = [
                    {
                        index: "1 1",
                        url: "https://twitter.com/home",
                        icon_class: "icon_logo nf nf-cod-twitter",
                        icon_color: "color: #1E90FF;",
                        name_txt: " Twitter ",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 2",
                        url: "https://www.pixiv.net/",
                        icon_class: "icon_logo nf nf-md-alpha_p_box",
                        icon_color: "color: #1E90FF;",
                        name_txt: " Pixiv ",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 3",
                        url: "https://www.instagram.com/",
                        icon_class: "icon_logo nf nf-md-instagram",
                        icon_color: "background: linear-gradient(to bottom,rgb(204, 50, 191), #FF4040,rgb(255, 196, 0));-webkit-background-clip: text;-webkit-text-fill-color: transparent;",
                        name_txt: " Instagram ",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 4",
                        url: "https://www.pinterest.com/",
                        icon_class: "icon_logo nf nf-fa-pinterest_p",
                        icon_color: "color: #FF0000;",
                        name_txt: " Pinterest ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 1",
                        url: "https://www.google.com.hk/",
                        icon_class: "icon_logo nf nf-md-google",
                        icon_color: "background: linear-gradient(to bottom right, rgba(0, 119, 255, 0.85), #FF4040, #FFA500, #00FF00);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;",
                        name_txt: " Google ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 2",
                        url: "https://mail.google.com/mail/",
                        icon_class: "icon_logo nf nf-md-gmail",
                        icon_color: "background: linear-gradient(to bottom right,rgba(0, 119, 255, 0.85), #FF0000, #FFA500, #00FF00);background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent;",
                        name_txt: " GMail ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 3",
                        url: "https://www.youtube.com",
                        icon_class: "icon_logo nf nf-fa-youtube",
                        icon_color: "color: #FF4500;",
                        name_txt: " Youtube ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "https://x.com/",
                        icon_class: "icon_logo nf nf-md-twitch",
                        icon_color: "color: #96028e;",
                        name_txt: " Twitch ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "https://www.nerdfonts.com/",
                        icon_class: "icon_logo nf nf-seti-font",
                        icon_color: "color: #625c50;",
                        name_txt: " Nerd-Font ",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "https://feijiyun11.xyz/user",
                        icon_class: "icon_logo nf nf-fa-plane",
                        icon_color: "color: #6777ef;",
                        name_txt: " PlaneCloud ",
                        icon: "\f08f3"
                    }
                ]
            }
            if (url === 'work') {
                this.link_sites = [
                    {
                        index: "1 1",
                        url: "https://vpn.kymy.vip:8443/",
                        icon_class: "icon_logo nf nf-md-vpn",
                        icon_color: "color: #008B8B",
                        name_txt: "贸易VPN",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 2",
                        url: "http://192.168.121.115",
                        icon_class: "icon_logo nf nf-oct-fiscal_host",
                        icon_color: "color: #008B00",
                        name_txt: "贸易堡垒机",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 3",
                        url: "http://hr.kymy.vip:7070/ess",
                        icon_class: "icon_logo nf nf-md-contacts",
                        icon_color: "\t#B22222",
                        name_txt: "贸易EHR",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 4",
                        url: "https://docs.qq.com/sheet/DRW13d01rTlZyZFpp?tab=imq9vh",
                        icon_class: "icon_logo nf nf-md-microsoft_excel",
                        icon_color: "color: #9ACD32",
                        name_txt: "例会工作表",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 5",
                        url: "https://kymy.vip",
                        icon_class: "icon_logo nf nf-fa-building_o",
                        icon_color: "color: #00BFFF",
                        name_txt: "贸易门户",
                        icon: "\f08f3"
                    },
                    {
                        index: "1 6",
                        url: "https://k-eip.sphkeyuan.com/",
                        icon_class: "icon_logo nf nf-fa-building",
                        icon_color: "color: #1E90FF",
                        name_txt: "上药门户",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 1",
                        url: "https://dl.sphchina.com/idp/authcenter/ActionAuthChain?entityId=OA",
                        icon_class: "icon_logo nf nf-dev-google_cloud_platform",
                        icon_color: "color: #008B45",
                        name_txt: "OA",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 2",
                        url: "https://pan.kymy.vip:9999/",
                        icon_class: "icon_logo nf nf-fa-hdd_o",
                        icon_color: "color: #4169E1\t",
                        name_txt: "联想网盘",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 3",
                        url: "http://192.168.118.55:8081",
                        icon_class: "icon_logo nf nf-cod-symbol_enum",
                        icon_color: "color: #0000CD",
                        name_txt: "SAP->BI",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 4",
                        url: "http://192.168.118.135:8050/",
                        icon_class: "icon_logo nf nf-md-hospital_box_outline",
                        icon_color: "color: #A52A2A",
                        name_txt: "贸易社保登记",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 5",
                        url: "http://lgapi.kymy.vip:8093/prd/services?wsdl",
                        icon_class: "icon_logo nf nf-md-alpha_g_circle",
                        icon_color: "color: #B22222",
                        name_txt: "LG三方生产",
                        icon: "\f08f3"
                    },
                    {
                        index: "2 6",
                        url: "https://mailh.qiye.163.com/",
                        icon_class: "icon_logo nf nf-cod-mail",
                        icon_color: "color: #8B3A3A",
                        name_txt: "企业邮箱",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 1",
                        url: "https://10.100.107.38",
                        icon_class: "icon_logo nf nf-oct-fiscal_host",
                        icon_color: "color: #008B45",
                        name_txt: "海斯林科堡垒机",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 2",
                        url: "https://192.168.120.10",
                        icon_class: "icon_logo nf nf-oct-server",
                        icon_color: "color: #EE7621",
                        name_txt: "VCenter丰台",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 3",
                        url: "https://192.168.121.25",
                        icon_class: "icon_logo nf nf-oct-server",
                        icon_color: "color: #1E90FF",
                        name_txt: "VCenter顺义",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 4",
                        url: "https://192.168.111.252:5001",
                        icon_class: "icon_logo nf nf-md-nas",
                        icon_color: "color: #EE7621",
                        name_txt: "Nas丰台",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 5",
                        url: "https://192.168.122.8:5001",
                        icon_class: "icon_logo nf nf-md-nas",
                        icon_color: "color: #1E90FF",
                        name_txt: "Nas顺义",
                        icon: "\f08f3"
                    },
                    {
                        index: "3 6",
                        url: "https://vdi.sphkeyuan.cn/admin/",
                        icon_class: "icon_logo nf nf-cod-vm_active",
                        icon_color: "color: #EE7621",
                        name_txt: "Horizen管理员",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 1",
                        url: "https://vdi.sphkeyuan.cn/",
                        icon_class: "icon_logo nf nf-cod-vm",
                        icon_color: "color: #1E90FF",
                        name_txt: "Horizen",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 2",
                        url: "http://192.168.118.121",
                        icon_class: "icon_logo nf nf-md-api",
                        icon_color: "color: #EE7621",
                        name_txt: "ESB测试WSDL",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 3",
                        url: "http://192.168.118.63",
                        icon_class: "icon_logo nf nf-md-api",
                        icon_color: "color: #1E90FF",
                        name_txt: "ESB生产",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 6",
                        url: "http://192.168.118.42:8090",
                        icon_class: "icon_logo nf nf-md-truck_delivery",
                        icon_color: "color: #CDCD00",
                        name_txt: "三方物流",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 6",
                        url: "http://bi.kymy.vip:6655/webroot/decision/login",
                        icon_class: "icon_logo nf nf-oct-table",
                        icon_color: "color: #1E90FF",
                        name_txt: "Fine",
                        icon: "\f08f3"
                    },
                    {
                        index: "5 1",
                        url: "http://lgapi.kymy.vip:8092/qa/services?wsdl",
                        icon_class: "icon_logo nf nf-md-alpha_g_circle_outline",
                        icon_color: "color: #B22222",
                        name_txt: "LG三方测试",
                        icon: "\f08f3"
                    },
                    {
                        index: "5 2",
                        url: "http://lgapi.kymy.vip:8093/prd/services?wsdl",
                        icon_class: "icon_logo nf nf-md-alpha_g_circle_outline",
                        icon_color: "color: #B22222",
                        name_txt: "LG三方生产",
                        icon: "\f08f3"
                    },
                    {
                        index: "6 3",
                        url: "http://kyttms.sphkeyuan.com:18080/logincenter/wmslogin#home",
                        icon_class: "icon_logo nf nf-md-oci",
                        icon_color: "color: #d12b20",
                        name_txt: "富勒WMS",
                        icon: "\f08f3"
                    },
                    {
                        index: "6 4",
                        url: "http://kyttms.sphkeyuan.com:28080/logincenter/tmslogin#home",
                        icon_class: "icon_logo nf nf-md-oci",
                        icon_color: "color: #d12b20",
                        name_txt: "富勒TMS",
                        icon: "\f08f3"
                    },
                    {
                        index: "6 5",
                        url: "http://192.168.111.197",
                        icon_class: "icon_logo nf nf-md-printer",
                        icon_color: "color: #CD853F",
                        name_txt: "彩打",
                        icon: "\f08f3"
                    },
                    {
                        index: "6 6",
                        url: "http://192.168.111.198",
                        icon_class: "icon_logo nf nf-md-printer",
                        icon_color: "color: #CD853F",
                        name_txt: "黑白",
                        icon: "\f08f3"
                    },
                    {
                        index: "5 3",
                        url: "http://192.168.118.2",
                        icon_class: "icon_logo nf nf-dev-nginx",
                        icon_color: "color: #228B22",
                        name_txt: "Nginx",
                        icon: "\f08f3"
                    },
                    {
                        index: "5 3",
                        url: "10.11.0.21/business-ui/",
                        icon_class: "icon_logo nf nf-md-clipboard_flow_outline",
                        icon_color: "color: #028bff",
                        name_txt: "业务控制台",
                        icon: "\f08f3"
                    },
                    {
                        index: "5 3",
                        url: "biportal.kymy.vip:8855/webroot/decision/login",
                        icon_class: "icon_logo nf nf-oct-table",
                        icon_color: "color: #0085e0",
                        name_txt: "数据报表",
                        icon: "\f08f3"
                    },
                    {
                        index: "4 6",
                        url: "http://192.168.118.59:8080/webroot/decision",
                        icon_class: "icon_logo nf nf-md-cat",
                        icon_color: "color: #CD853F",
                        name_txt: "FDL",
                        icon: "\f08f3"
                    }
                ]
            }
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
                if (datenow === '1') datenow = '  Mon'
                if (datenow === '2') datenow = '  Tue'
                if (datenow === '3') datenow = '  Wen'
                if (datenow === '4') datenow = '  Thu'
                if (datenow === '5') datenow = '  Fri'
                if (datenow === '6') datenow = '  Sat'
                if (datenow === '7') datenow = '  Sun'
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