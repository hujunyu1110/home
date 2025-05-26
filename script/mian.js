function baiduSrearch(str) {
    var flag = 0;
    var baidu = $("#baidueng").attr("class");
    var bing = $("#bingeng").attr("class");
    var google = $("#googleeng").attr("class");
    if (baidu.indexOf("engon") != -1) { flag += 3 }
    if (bing.indexOf("engon") != -1) { flag += 5 }
    if (google.indexOf("engon") != -1) { flag += 7 }
    if (flag === 3) {
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + str, "_blank");
    }
    if (flag === 5) {
        window.open("https://www.bing.com/search?q=" + str, "_blank");
    }
    if (flag === 7) {
        window.open("https://www.google.com.hk/search?q=" + str, "_blank");
    }
    if (flag === 8) {
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + str, "_blank");
        window.open("https://www.bing.com/search?q=" + str, "_blank");
    }
    if (flag === 10) {
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + str, "_blank");
        window.open("https://www.google.com.hk/search?q=" + str, "_blank");
    }
    if (flag === 12) {
        window.open("https://www.bing.com/search?q=" + str, "_blank");
        window.open("https://www.google.com.hk/search?q=" + str, "_blank");
    }
    if (flag === 15) {
        window.open("https://www.baidu.com/s?ie=UTF-8&wd=" + str, "_blank");
        window.open("https://www.bing.com/search?q=" + str, "_blank");
        window.open("https://www.google.com.hk/search?q=" + str, "_blank");
    }
    $("#Oinput").val(null);
}   // 搜索

function judgeSearch() {
    /* 搜索引擎选择 */
    $("#baidueng").click(function () {
        var engclass = $("#baidueng").attr("class");
        if (engclass.indexOf("engon") == -1) {
            $("#baidueng").addClass("engon");
            $("#baidueng").removeClass("gray");

            $("#bingeng").removeClass("gray");
            $("#bingeng").removeClass("engon");
            $("#bingeng").addClass("gray");
            $("#googleeng").removeClass("gray");
            $("#googleeng").removeClass("engon");
            $("#googleeng").addClass("gray");
        }
    });
    $("#bingeng").click(function () {
        var engclass = $("#bingeng").attr("class");
        if (engclass.indexOf("engon") == -1) {
            $("#bingeng").addClass("engon");
            $("#bingeng").removeClass("gray");

            $("#baidueng").removeClass("gray");
            $("#baidueng").removeClass("engon");
            $("#baidueng").addClass("gray");
            $("#googleeng").removeClass("gray");
            $("#googleeng").removeClass("engon");
            $("#googleeng").addClass("gray");
        }
    });
    $("#googleeng").click(function () {
        var engclass = $("#googleeng").attr("class");
        if (engclass.indexOf("engon") == -1) {
            $("#googleeng").addClass("engon");
            $("#googleeng").removeClass("gray");

            $("#baidueng").removeClass("gray");
            $("#baidueng").removeClass("engon");
            $("#baidueng").addClass("gray");
            $("#bingeng").removeClass("gray");
            $("#bingeng").removeClass("engon");
            $("#bingeng").addClass("gray");
        }
    });
}   // 搜索引擎判断


function openPage(url) {
    window.open(url, "_blank");
    //window.open(url, "_self");
}   // 打开页面

function judgeScreen() {
    var he = document.body.clientHeight;
    var wi = document.body.clientWidth;
    if (he < wi) { }
    else {
        $(".searchImgEx4").removeClass("col-sm-4");
        $(".searchImgEx5").removeClass("col-sm-5");
        $(".searchImgEx4").addClass("col-sm-3");
        $(".searchImg").removeClass("col-sm-1");
        $(".searchImg").addClass("col-sm-3");

        $(".searchExCh").removeClass("col-xs-6 col-sm-3");
        $(".searchExCh").addClass("col-xs-6 col-sm-1");
        $(".searchCh").removeClass("col-xs-6 col-sm-5");
        $(".searchCh").addClass("col-xs-6 col-sm-9");

        $(".firstFlowcc").attr("style", "width: 15%;")
        $(".baiduclass").attr("style", "height: 30px;margin-left: 8px");
        $(".bingclass").attr("style", " height: 30px; margin-top:2px; margin-left: 14%;");
        $(".googleclass").attr("style", "height: 30px; margin-top:4px;");
        $("#weathertoday").attr("style", "font-size: 23px; top: 8px;");
        $("#weathertomorrow").attr("style", "font-size: 23px; top: 35px;");

    }
}   // 屏幕比例判断

function weather() {
    /* Wheather */
    $.ajax({
        type: "GET",
        url: "https://restapi.amap.com/v3/weather/weatherInfo?key=c4c1852df655e3f701e2989729041c23&city=110000&extensions=all",
        //dataType: "json",
        success: function (res) {
            var obj = res;
            //var obj = JSON.parse(res);
            var forecasts = obj['forecasts']
            var forecasts0 = forecasts[0]
            var casts = forecasts0['casts']
            var casts0 = casts[0]
            var tem = casts0['tem'];
            var tem1 = casts0['nighttemp_float'];
            var tem2 = casts0['daytemp_float'];
            var wea = casts0['dayweather'];
            var datenow = casts0['date'] + " " + casts0['week'];
            var showTitle = "";
            console.log(casts0)
            $("#weathertoday").text(datenow + " | " + tem1 + "℃ ~ " + tem2 + "℃ | " + wea);
            //$("#weathertomorrow").text(forecast[1]['date'] + " | " + forecast[1]['high'] + "~" + forecast[1]['low'] + " | " + forecast[1]['type']);
            /*
            for (var i = 0; i < forecast.length; i++) {
                showTitle = showTitle + forecast[i]['date'] + " | " + forecast[i]['high'] + "~" + forecast[i]['low'] + " | " + forecast[i]['type'] + "\n";
            }
            */
            $("#weathertoday").attr("title", showTitle);
            //$("#weathertoday").attr("onclick", "openPage(\"https://springduck.xyz/count\")");
            //$("#weathertomorrow").attr("title", showTitle);
        }
    });
}   // 天气模块



$(document).ready(function () {
    judgeScreen();
    weather();
    judgeSearch();

    /* 搜索按钮 */
    $("#search").click(function () {
        var searchStr = $("#Oinput").val();
        baiduSrearch(searchStr);
    });

    /* 回车监听 */
    $("input").keypress(function (e) {
        var key = e.which; //e.which是按键的值
        var searchStr = $("#Oinput").val();
        if (key == 13) {
            if (null != searchStr) {
                baiduSrearch(searchStr);
            }
        }
    });


});