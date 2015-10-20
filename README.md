1.在加载jQuery类库时，既要加载到地址，又要保证
加载的模块名和jQuery定义的模块名是一致（暂时不清楚，具体原因）
if ( typeof define === "function" && define.amd ) {
    define( "jquery1", [], function () { return jQuery; } );
}