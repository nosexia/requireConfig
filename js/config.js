var require = {
    baseUrl: 'js',
    paths:{
        jquery: 'lib/jquery',
        backbone: 'lib/backbone',
        underscore: 'lib/underscore',
        'jquery.dragsort': 'lib/jquery.dragsort-0.5.1'
    },
    //加载backbone需要依赖['jquery', 'underscore']
    shim:{
        backbone: ['jquery', 'underscore'],
        'jquery.dragsort': ['jquery']
    }        
};

//引入backbone之前，依赖['jquery', 'underscore']
define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
  // Export global even in AMD case in case this script is loaded with
  // others that may still expect a global Backbone.
  root.Backbone = factory(root, exports, _, $);
});


//引入jquery.dragsort，依赖['jquery']

//shim属性，处理依赖问题
