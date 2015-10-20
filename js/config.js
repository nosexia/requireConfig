var _params;
var require = {
    baseUrl: 'js',
    urlArgs: 'v=111',
    paths:{
        jquery: 'lib/jquery',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        'jquery.dragsort': 'lib/jquery.dragsort-0.5.1',
        angular: 'lib/angular.min'
    },
    //加载backbone需要依赖['jquery', 'underscore']
    shim:{
        backbone: ['jquery', 'underscore'],
        'jquery.dragsort': ['jquery'],
        angular:{
            exports: 'angular'
        }
    },
    config: {
        'common/params': _params || {}
    }        
};

//定义_params;
//config: {'common/params': _params || {} }
