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