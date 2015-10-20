define([
    'module'
],function(module){
    return module.config();
});

//调用common/app是，返回_params || {}
//index.html中定义_params变量，页面中需要的变量，保存到_params对象中，调用'app/common'获取