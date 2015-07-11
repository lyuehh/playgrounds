// 1 commonjs

function a() {

}

exports.a = a
module.export = a


// amd
define('a', ['b', 'c'], function(b, c) {
    // xxx
});

// cmd
define(function(module, exports, require) {
    var b = require('../b');
    // xxx
    exports.xx = xx; // 拿过来用
    module.export = xx; // 拿过来 new XX();
});




