function weather() {
    /* Wheather */
    $.ajax({
        type: "GET",
        url: "https://yiketianqi.com/api?version=v6&appid=88698826&appsecret=JgR7ocUb&cityid=101010100",
        //dataType: "json",
        success: function (res) {
            //console.log(res);
            var obj = res;
            //var obj = JSON.parse(res);
            var tem = obj['tem'];
            var tem1 = obj['tem1'];
            var tem2 = obj['tem2'];
            var wea = obj['wea'];
            var datenow = obj['date'] + " " + obj['week'];
            var showTitle = "";
            $("#weathertoday").text(datenow + " | " + tem2 + "~" + tem1 + " | " + wea);
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