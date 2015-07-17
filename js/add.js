
/*
   add(2, 3, 4)
   add(2)(3)(4)
   */

function add() {
    var arr = [].slice.call(arguments);
    return arr.reduce(function(a, b) {
        return a + b;
    }, 0);
    // console.log(arr);
}

console.log(add(2,3,4));


function add2(x) {
    return function(y) {
        if (typeof y !== 'undefined') {
            x = x + y;
            return arguments.callee;
        } else {
            return x;
        }
    };
}

console.log(add2(1)(2)(3)(4)());


function add3(x) {
    var sum = x;
    var tmp = function (y) {
        sum = sum + y;
        return tmp;
    };
    tmp.toString = tmp.valueOf = function () {
        return sum;
    };
    return tmp;
}
console.log(add3(1)(2)(3));  //6
console.log(add3(1)(2)(3)(4));   //10
