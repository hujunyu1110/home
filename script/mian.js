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