$(document).ready(function () {
    $.ajax({
        url: "/getCount",
        type: "GET",
        success: function (res) {
            var el = $('#mainContainer');
            var date = new Date();
            var obj = JSON.parse(res);
            var datalist = obj["data_list"];
            for (var i = 0; i < datalist.length; i++) {
                var name = datalist[i][0];
                var every = datalist[i][5];
                var t_month = datalist[i][2];
                var t_day = datalist[i][3];

                var str_head = "<div class=\"row\">";
                var str_tail = "</div>";
                var space = "<div class=\"col-xs-3 col-sm-1\" style=\"margin: 3px;\">" + "" + "</div>";

                //每年
                switch (every) {
                    case "year":
                        console.log(every)
                        t_year = date.getFullYear();
                        var target_date = t_month + "/" + t_day + "/" + t_year;
                        var t_date = new Date(target_date);
                        if (t_date.getTime() < date.getTime()) {
                            t_year += 1;
                            var target_date = t_month + "/" + t_day + "/" + t_year;
                            var t_date = new Date(target_date);
                        }
                        var coutDate = t_date.getTime() - date.getTime();
                        var d;
                        d = Math.floor(coutDate / 1000 / 60 / 60 / 24) + 1;
                        if (d >= 365) {
                            d = 0
                        }
                        
                        var str_pic = "<div class=\"col-xs-3 col-sm-1\" style=\"margin: 3px;\">" + "" + "</div>";
                        var str_name = "<div class=\"col-xs-3 col-sm-2 a\" style=\" margin: 3px;\">" + name + "</div>";
                        var str_type = "<div class=\"col-xs-3 col-sm-1 a hy\" style=\" margin: 3px;\">还有</div>";
                        var str_d = "<div class=\"col-xs-3 col-sm-1 a\" style=\" margin: 3px;\">" + d + "天</div>";
                        
                        break;

                    default:
                        //正常计数
                        console.log("normal")
                        var t_year = datalist[i][1];
                        var target_date = t_month + "/" + t_day + "/" + t_year;
                        var t_date = new Date(target_date);
                        if (t_date.getTime() < date.getTime()) {
                            //纪念日
                            var coutDate = date.getTime() - t_date.getTime();
                            var d;
                            d = Math.floor(coutDate / 1000 / 60 / 60 / 24);
                            var str_pic = "<div class=\"col-xs-3 col-sm-1\" style=\"margin: 3px;\">" + "" + "</div>";
                            var str_name = "<div class=\"col-xs-3 col-sm-2 a\" style=\" margin: 3px;\">" + name + "</div>";
                            var str_type = "<div class=\"col-xs-3 col-sm-1 a yj\" style=\" margin: 3px;\">已经</div>";
                            var str_d = "<div class=\"col-xs-3 col-sm-1 a\" style=\" margin: 3px;\">" + d + "天</div>";
                        } else {
                            //倒数日
                            var coutDate = t_date.getTime() - date.getTime();
                            var d;
                            d = Math.floor(coutDate / 1000 / 60 / 60 / 24) + 1;
                            var str_pic = "<div class=\"col-xs-3 col-sm-1\" style=\"margin: 3px;\">" + "" + "</div>";
                            var str_name = "<div class=\"col-xs-3 col-sm-2 a\" style=\" margin: 3px;\">" + name + "</div>";
                            var str_type = "<div class=\"col-xs-3 col-sm-1 a hy\" style=\" margin: 3px;\">还有</div>";
                            var str_d = "<div class=\"col-xs-3 col-sm-1 a\" style=\" margin: 3px;\">" + d + "天</div>";
                        }
                        break;
                }
                el.append(str_head + str_pic + str_name + str_type + str_d + space + space + space + space + space + space + space + str_tail);
            }

        }
    });
});