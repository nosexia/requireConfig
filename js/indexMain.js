require([
    'common/domReady!'
],function(domReady){
    //相当于document.ready方法
    console.log(domReady)       //document
});

//1.可以让回调函数在document加载后加载
//2.返回值是当前document对象