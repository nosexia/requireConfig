require([
    'common/domReady'
],function(domReady){
    //相当于document.ready方法
    domReady(function(){
        var oDiv = document.getElementById('div1');
        if(!oDiv){
            debugger
        }
        console.log(oDiv);
    });
});

