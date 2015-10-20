1.在加载jQuery类库时，既要加载到地址，又要保证<br/>
2.加载的模块名和jquery定义的模块名是一致（这里定义的模块名是'jquery1'）<br/>
3.在config.js中配置的属性也是'jquery1'<br/>
if ( typeof define === "function" && define.amd ) {
    define( "jquery1", [], function () { return jQuery; } );
}