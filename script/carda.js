var vm = new Vue({
    el: '.containerMain',
    data: {
        link_sites: [],
    },
    created: function () {
        var tittle_str = document.title
        this.createData('/files/' + tittle_str + '.json')
    },
    methods: {
        click_center: function (index) {
            this.link_sites = this.check_everyone(index, this.link_sites)
        },
        /* 初始化函数 */
        check_everyone: function (center_index, list) {

            var list_length = list.length

            var index0 = 0
            var index1 = 1
            var index2 = 2
            var index3 = 3
            var index4 = 4
            var index5 = 5
            var index6 = 6
            if (center_index > 2 && center_index < list_length - 3) {
                index0 = center_index - 3
                index1 = center_index - 2
                index2 = center_index - 1
                index3 = center_index
                index4 = center_index + 1
                index5 = center_index + 2
                index6 = center_index + 3
            }
            if (center_index == 2) {
                index0 = list_length - 1
                index1 = 0
                index2 = 1
                index3 = 2
                index4 = 3
                index5 = 4
                index6 = 5
            }
            if (center_index == 1) {
                index0 = list_length - 2
                index1 = list_length - 1
                index2 = 0
                index3 = 1
                index4 = 2
                index5 = 3
                index6 = 4
            }
            if (center_index == 0) {
                index0 = list_length - 3
                index1 = list_length - 2
                index2 = list_length - 1
                index3 = 0
                index4 = 1
                index5 = 2
                index6 = 3
            }
            if (center_index == list_length - 3) {
                index0 = list_length - 6
                index1 = list_length - 5
                index2 = list_length - 4
                index3 = list_length - 3
                index4 = list_length - 2
                index5 = list_length - 1
                index6 = 0
            }
            if (center_index == list_length - 2) {
                index0 = list_length - 5
                index1 = list_length - 4
                index2 = list_length - 3
                index3 = list_length - 2
                index4 = list_length - 1
                index5 = 0
                index6 = 1
            }
            if (center_index == list_length - 1) {
                index0 = list_length - 4
                index1 = list_length - 3
                index2 = list_length - 2
                index3 = list_length - 1
                index4 = 0
                index5 = 1
                index6 = 2
            }

            for (var i = 0; i < list_length; i++) {
                list[i].is_top = -1
                list[i].model_class = 'everyModel everyModel_hiden'

                if (i == index6) {
                    list[i].is_top = 6
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center6'
                }
                else if (i == index5) {
                    list[i].is_top = 5
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center5'
                }
                else if (i == index4) {
                    list[i].is_top = 4
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center4'
                }
                else if (i == index3) {
                    list[i].is_top = 3
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center3'
                }
                else if (i == index2) {
                    list[i].is_top = 2
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center2'
                }
                else if (i == index1) {
                    list[i].is_top = 1
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center1'
                }
                else if (i == index0) {
                    list[i].is_top = 0
                    list[i].model_class = list[i].model_class.replace('everyModel_hiden', '') + ' everyModel_center0'
                }
                else {
                    list[i].is_top = -1
                    list[i].model_class = 'everyModel everyModel_hiden'
                }
            }

            return list
        },
        // 初始化数组
        createData: function (url) {
            this.$http.get(url).then(function (res) {
                var data = res.body.data
                data = this.createIndex(data)
                data = this.removeClass(data)
                data = this.check_everyone(3, data)
                this.link_sites = data
            }, function () {
            })
        },
        createIndex: function (list_data) {
            for (var i = 0; i < list_data.length; i++) {
                list_data[i].index = i
            }
            return list_data
        },
        removeClass: function (list) {
            for (var i = 0; i < list.length; i++) {
                list[i].model_class = 'everyModel everyModel_hiden'
                list[i].is_top = -1
            }
            return list
        }
    },
})