var require = {
    baseUrl: 'js',
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
    }        
};

//引入angular的方式,angular是cmd模式，需要用到exports输出
