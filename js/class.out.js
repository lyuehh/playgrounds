'use strict';

var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var A = (function() {
    function A(a, b) {
        _classCallCheck(this, A);

        this.a = a;
        this.b = b;
    }

    _createClass(A, [{
        key: 'c',
        value: function c() {
            console.log('c');
        }
    }]);

    return A;
})();

/*
function A(a, b) {
    this.a = a;
    this.b = b;
}

A.prototype.c = function() {
    console.log('c');
}
*/
