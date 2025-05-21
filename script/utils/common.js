function openPage(url) {
    window.open(url, "_blank");
    //window.open(url, "_self");
}   // 打开页面

function judgeScreen() {
    var he = document.body.clientHeight;
    var wi = document.body.clientWidth;
    //console.log(1, he, wi);
    if (he < wi) { }
    else {

        $("p").attr("style", "font-size:23px");

        $(".searchImgEx4").removeClass("col-sm-4");
        $(".searchImgEx5").removeClass("col-sm-5");
        $(".searchImgEx4").addClass("col-sm-3");
        //$(".searchImgEx5").addClass("col-sm-1");
        $(".searchImg").removeClass("col-sm-1");
        $(".searchImg").addClass("col-sm-3");

        $(".searchExCh").removeClass("col-xs-6 col-sm-3");
        $(".searchExCh").addClass("col-xs-6 col-sm-1");
        $(".searchCh").removeClass("col-xs-6 col-sm-5");
        $(".searchCh").addClass("col-xs-6 col-sm-9");

        $("#search").text("搜索");
        $("#Oinput").attr("style", "height: 80px; font-size: 27px; margin-bottom: 80px;");
        $("#search").attr("style", "height: 80px; font-size: 27px; margin-bottom: 80px;");
        //$(".searImg").attr("style", "height: 30px;");
        $(".firstFlowcc").attr("style", "width: 15%;")
        $(".baiduclass").attr("style", "height: 30px;margin-left: 8px");
        $(".bingclass").attr("style", " height: 30px; margin-top:2px; margin-left: 14%;");
        $(".googleclass").attr("style", "height: 30px; margin-top:4px;");
        $("#weathertoday").attr("style", "font-size: 23px; top: 8px;");
        $("#weathertomorrow").attr("style", "font-size: 23px; top: 35px;");

    }
}   // 屏幕比例判断