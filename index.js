/**
 * Created by brave on 16/12/26.
 */
//定义vm
var vm = avalon.define({
    $id: "test",
    data: {name: 'testBefore'},
    array: [],
    removeItem: function (index) {
        vm.array.splice(index, 1);
    }
});


//3秒后设置vm组件以观察组件内vm变化
setTimeout(function () {
    vm.data.name = 'testAfter';
    vm.array = [33, 44, 55, 66];
}, 3000);



