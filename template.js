/**
 * Created by brave on 16/12/30.
 */
//定义组件
$.ajax({
    url: 'template.html',
    success: function (data) {
        avalon.component('ms-pager', {
            template: data,
            defaults: {
                data: {},
                array: [],
                removeItem: vm.removeItem
            }
        });
    }
});