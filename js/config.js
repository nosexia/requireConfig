var require = {
    baseUrl: 'js',
    paths:{
        jquery1: 'lib/jQuery'
    }        
};

//设置require的baseUrl为'js'
//找data-main是，写data-main='indexMain'
//在indexMain，引入ui1.js模块，引入模块名'ui/ui1'  



//如果require有值，那么cfg指向require
//require变量赋值为undefined     // 保证这段程序只走一次
//Allow for a require config object
if (typeof require !== 'undefined' && !isFunction(require)) {
    //assume it is a config object.
    cfg = require;
    require = undefined;
}



configure: function (cfg) {
//Make sure the baseUrl ends in a slash.            //确保baseUrl已'/'结束
if (cfg.baseUrl) {
    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== '/') {
        cfg.baseUrl += '/';
    }
}


//以后写配置baseUrl，不需要写在最后写'/'
