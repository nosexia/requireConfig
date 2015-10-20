require([
    'module1'
],function(module1){
    console.log(module1);
});


//1.这里用的module1.js  module已经依赖注入
//2.没有指定require对象的baseUrl，baseUrl为subPath= 'js/'
/*
if (!cfg.baseUrl) {
    //Pull off the directory of data-main for use as the
    //baseUrl.
    src = mainScript.split('/');
    mainScript = src.pop();
    subPath = src.length ? src.join('/')  + '/' : './';
    cfg.baseUrl = subPath;      
}*/