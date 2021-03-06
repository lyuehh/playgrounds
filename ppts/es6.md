title: ES6 简介
speaker: 王伟伟
url: todo
transition: move
files: /js/zoom.js
theme: moon

[slide]
# ES6 简介
<small>王伟伟</small>

[slide]
##浏览器支持情况
----

<iframe data-src="http://kangax.github.io/compat-table/es6/"></iframe>


[slide]
## ES6资料
----

* [Ecma-262.pdf](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)
* [Understanding ECMAScript 6 ](https://leanpub.com/understandinges6/read/) <span class="label label-default">by Nicholas C. Zakas</span>
* [Exploring ES6](https://leanpub.com/exploring-es6/read)<span class="label label-default">by Axel Rauschmayer</span>
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/intro) <span class="label label-default">by ruanyifeng</span>
* [Learn ES2015](https://babeljs.io/docs/learn-es2015/)<span class="label label-default">by babel</span>

[slide]
## Module


[slide]
## several per module
---

```
// Named exports

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// or
import * as lib from 'lib';
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5

```

[slide]
## several per module 续
---

```
// CommonJS

//------ lib.js ------
var sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
function diag(x, y) {
    return sqrt(square(x) + square(y));
}
module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
};

//------ main.js ------
var square = require('lib').square;
var diag = require('lib').diag;
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

```

[slide]
## one per module
---

```javascript
// function
//------ myFunc.js ------
export default function () { ... };

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();

// class
//------ MyClass.js ------
export default class { ... };

//------ main2.js ------
import MyClass from 'MyClass';
let inst = new MyClass();
```


[slide]
[note]
<http://www.2ality.com/2014/09/es6-modules-final.html>
[/note]
## named exports and a default export
---

```javascript
//------ underscore.js ------
export default function (obj) {
    //...
};
export function each(obj, iterator, context) {
    //...
}
export { each as forEach };

//------ main.js ------
import _, { each } from 'underscore';
```


[slide]
## Syntax


[slide]
## default function parameters
---

```
// 1
(function(a = 1, b = 2) {
    return a === 3 && b === 2;
}(3))

// 2
(function(a = 1, b = 2) {
    return a === 1 && b === 3;
}(undefined, 3))

// 3
(function(a, b = a) {
    return b === 5;
}(5))
```

[slide]
## rest parameters
----

```
// 1
(function (foo, ...args) {
  return args instanceof Array && args + "" === "bar,baz";
}("foo", "bar", "baz"))

// 2
(function(a, ...b){}).length === 1 &&
(function(...c){}).length === 0

// 3
(function (foo, ...args) {
  foo = "qux";
  return arguments.length === 3
    && arguments[0] === "foo"
    && arguments[1] === "bar"
    && arguments[2] === "baz";
}("foo", "bar", "baz"))
```

[slide]
## spread (...) operator
---

```javascript
// 1
Math.max(...[1, 2, 3]) === 3
// Math.max.apply(null, [1, 2, 3])

// 2
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
Math.max(...iterable) === 3;

// 3
Math.max(..."1234") === 4

// 4
Array(..."ab")[0] === "a"

```


[slide]
## object literal extensions
---

```
// 1
var x = 'y';
({ [x]: 1 }).y === 1

// 2
var a = 7, b = 8, c = {a,b};
c.a === 7 && c.b === 8

// 3
({ y() { return 2; } }).y() === 2

// 4
({"foo bar"() { return 4; } })["foo bar"]() === 4

// 5
var x = 'y',
    valueSet,
    obj = {
      get [x] () { return 1 },
      set [x] (value) { valueSet = value }
    };
obj.y = 'foo';
obj.y === 1 && valueSet === 'foo'
```




[slide]
## for..of loops
---

```
// 1
var arr = [5];
for (var item of arr)
  item === 5

// 2
var str = "";
for (var item of "foo")
  str += item;
str === "foo"

// 3
var result = "";
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
for (var item of iterable) {
  result += item;
}
result === "123"

```


[slide]
## octal and binary literals
---

```
// 1
0o10 === 8 && 0O10 === 8

// 2
0b10 === 2 && 0B10 === 2

// 3
Number('0o1') === 1

// 4
Number('0b1') === 1
```


[slide]
## template strings
---

```jvascript
// 1
var a = "ba", b = "QUX";
`foo bar
${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux"

// 2
function fn(parts, a, b) {
  called = true;
  return parts instanceof Array &&
    parts[0]     === "foo"      &&
    parts[1]     === "bar\n"    &&
    parts.raw[0] === "foo"      &&
    parts.raw[1] === "bar\\n"   &&
    a === 123                   &&
    b === 456;
}
fn `foo${123}bar\n${456}`

fn(['foo', 'bar\n'], 123, 456)
```


[slide]
## RegExp "y" and "u" flags
---

```
// 1
var s = "aaa_aa_a";
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null

// 2
var string = 'a𝌆b';
console.log(/a.b/.test(string)); // false
console.log(/a.b/u.test(string)); // true

/\u{61}/.test('a') // false
/\u{61}/u.test('a') // true
```


[slide]
## destructuring
---

```
// 1
var [a, , [b], c] = [5, null, [6]];
var d, e;
[d,e] = [7,8];
a === 5 && b === 6 && c === undefined
  && d === 7 && e === 8

// 2
var [a, b, c] = "ab";
var d, e;
[d,e] = "de";
a === "a" && b === "b" && c === undefined
  && d === "d" && e === "e"

// 3
var [a, b, c] = (function*(){ yield 1; yield 2; }());
var d, e;
[d, e] = (function*(){ yield 3; yield 4; }());
a === 1 && b === 2 && c === undefined
  && d === 3 && e === 4

// 4
var {c, x:d, e} = {c:7, x:8};
var f, g;
({f,g} = {f:9,g:10});
c === 7 && d === 8 && e === undefined
  && f === 9 && g === 10

// 5
var [a, ...b] = [3, 4, 5];
var [c, ...d] = [6];
a === 3 && b instanceof Array && (b + "") === "4,5" &&
   c === 6 && d instanceof Array && d.length === 0

```


[slide]
## new.target
---

```
// 1
var passed = false;
new function f() {
  passed = (new.target === f);
}();
(function() {
  passed &= (new.target === undefined);
}());
passed;

// 2
var passed = false;
new function f() {
  passed = (new.target === f);
}();

try {
  Function("new.target = function(){};");
} catch(e) {
  return passed;
}
```



[slide]
## Bindings
---


[slide]
## const
---

```
// 1
const foo = 123;
(foo === 123)

// 2
const bar = 123;
{ const bar = 456; }
bar === 123;

// 3
const baz = 1;
try {
  Function("const foo = 1; foo = 2;")();
} catch(e) {
  return true;
}

```




[slide]
## let
---

```
// 1
let foo = 123;
(foo === 123)

// 2
let bar = 123;
{ let bar = 456; }
bar === 123

// 3
let baz = 1;
for(let baz = 0; false; false) {}
baz === 1;

```

[slide]
## block-level function declaration
---

```
// 1
'use strict';
function f() { return 1; }
{
  function f() { return 2; }
}
f() === 1
```

[slide]
## Functions
---


[slide]
## arrow functions
---

```
// 1
(() => 5)() === 5

// 2
var b = x => x + "foo";
(b("fee fie foe ") === "fee fie foe foo")

// 3
var c = (v, w, x, y, z) => "" + v + w + x + y + z;
(c(6, 5, 4, 3, 2) === "65432");

// 4
var d = { x : "bar", y : function() { return z => this.x + z; }}.y();
var e = { x : "baz", y : d };
d("ley") === "barley" && e.y("ley") === "barley";

// 5
var d = { x : "foo", y : function() { return () => this.x; }};
var e = { x : "bar" };
d.y().call(e) === "foo" && d.y().apply(e) === "foo"

// 6
var d = { x : "bar", y : function() { return z => this.x + z; }};
var e = { x : "baz" };
d.y().bind(e, "ley")() === "barley"

// 7
var a = () => 5;
!a.hasOwnProperty("prototype")

```


[slide]
## class
---

```
// 1
class C {}
typeof C === "function"

// 2
class C {}
var c1 = C;
{
  class C {}
  var c2 = C;
}
C === c1

// 3
class C {
  constructor() { this.x = 1; }
}
C.prototype.constructor === C
  && new C().x === 1;

// 4
class C {
  method() { return 2; }
}
typeof C.prototype.method === "function"
  && new C().method() === 2;

// 5
var foo = "method";
class C {
  [foo]() { return 2; }
}
typeof C.prototype.method === "function"
  && new C().method() === 2
```


[slide]
## class 2
---

```
// 6
class C {
  static method() { return 3; }
}
typeof C.method === "function"
  && C.method() === 3;

// 7
var foo = "method";
class C {
  static [foo]() { return 3; }
}
typeof C.method === "function"
  && C.method() === 3;

// 8
var baz = false;
class C {
  static get foo() { return "foo"; }
  static set bar(x) { baz = x; }
}
C.bar = true;
C.foo === "foo" && baz;

// 9
class C {}
try {
  C();
}
catch(e) {
  return true;
}
```


[slide]
##  class 3
---

```
// 10
class B {}
class C extends B {}
new C() instanceof B
  && B.isPrototypeOf(C);

// 11
var B;
class C extends (B = class {}) {}
new C() instanceof B
  && B.isPrototypeOf(C);

// 12
class C extends null {
  constructor() { return Object.create(null); }
}
Function.prototype.isPrototypeOf(C)
  && Object.getPrototypeOf(C.prototype) === null;

// 13
var passed = false;
new function f() {
  passed = new.target === f;
}();

class A {
  constructor() {
    passed &= new.target === B;
  }
}
class B extends A {}
new B();
passed;
```


[slide]
## super
---

```
// 1
var passed = false;
class B {
  constructor(a) { passed = (a === "barbaz"); }
}
class C extends B {
  constructor(a) { super("bar" + a); }
}
new C("baz");
passed;

// 2
class B {}
B.prototype.qux = "foo";
B.prototype.corge = "baz";
class C extends B {
  quux(a) { return super.qux + a + super["corge"]; }
}
C.prototype.qux = "garply";
new C().quux("bar") === "foobarbaz";

// 3
class B {
  qux(a) { return "foo" + a; }
}
class C extends B {
  qux(a) { return super.qux("bar" + a); }
}
new C().qux("baz") === "foobarbaz";
```


[slide]
## generators
---

```
// 1
function * generator(){
  yield 5; yield 6;
};
var iterator = generator();
var item = iterator.next();
item.value === 5 && item.done === false;
item = iterator.next();
item.value === 6 && item.done === false;
item = iterator.next();
item.value === undefined && item.done === true;

// 2
function * generator(){
  yield this.x; yield this.y;
};
try {
  (new generator()).next();
}
catch (e) {
  return true;
}

// 3
var o = {
  * generator() {
    yield 5; yield 6;
  },
};
var iterator = o.generator();
// ...

```


[slide]
## Built-ins
---


[slide]
## typed arrays
---

```
// 1
var buffer = new ArrayBuffer(64);
var view = new Int8Array(buffer);

Int8Array
Uint8Array
Uint8ClampedArray
Int16Array
Uint16Array
Int32Array
Uint32Array
Float32Array
Float64Array

DataView
ArrayBuffer

```


[slide]
## Map
---

```javascript
// 1
var key = {};
var map = new Map();
map.set(key, 123);
map.has(key) && map.get(key) === 123;

// 2
var passed = false;
var _set = Map.prototype.set;
Map.prototype.set = function(k, v) {
  passed = true;
};
new Map([ [1, 2] ]);
Map.prototype.set = _set;
passed

// 3
var key1 = {};
var key2 = {};
var map = new Map([[key1, 123], [key2, 456]]);

map.has(key1) && map.get(key1) === 123 &&
map.has(key2) && map.get(key2) === 456;

map.size === 2
Map.prototype.delete
Map.prototype.clear
Map.prototype.forEach
Map.prototype.keys
Map.prototype.values
Map.prototype.entries
Map.prototype[Symbol.iterator]

```


[slide]
## Set
---

```
// 1
var obj = {};
var set = new Set();

set.add(123);
set.add(123);
set.has(123);

// 2
var passed = false;
var _add = Set.prototype.add;
Set.prototype.add = function(v) {
  passed = true;
};
new Set([1]);
Set.prototype.add = _add;

passed;

// 2
var obj1 = {};
var obj2 = {};
var set = new Set([obj1, obj2]);

set.has(obj1) && set.has(obj2);

set.size == 2
Set.prototype.delete
Set.prototype.clear
Set.prototype.forEach
Set.prototype.keys
Set.prototype.values
Set.prototype.entries
Set.prototype[Symbol.iterator]

```


[slide]
## WeakMap WeakSet
---

```
// 1
var key = {};
var weakmap = new WeakMap();

weakmap.set(key, 123);

weakmap.has(key) && weakmap.get(key) === 123;

WeakMap.prototype.delete

// 2
var obj1 = {};
var weakset = new WeakSet();

weakset.add(obj1);
weakset.add(obj1);

weakset.has(obj1);
WeakSet.prototype.delete

```


[slide]
## Proxy
---

```
// 1
var proxied = { };
var proxy = new Proxy(proxied, {
  get: function (t, k, r) {
    return t === proxied && k === "foo" && r === proxy && 5;
  }
});
proxy.foo === 5;

// 2
var proxied = { };
var passed = false;
var proxy = new Proxy(proxied, {
  set: function (t, k, v, r) {
    passed = t === proxied && k + v === "foobar" && r === proxy;
  }
});
proxy.foo = "bar";

set
get
has
deleteProperty
getOwnPropertyDescriptor
defineProperty
getPrototypeOf
setPrototypeOf
isExtensible
preventExtensions
enumerate
ownKeys
apply
construct
```


[slide]
## Reflect
---

```
// 1
Reflect.get({ qux: 987 }, "qux") === 987
var obj = {};
Reflect.set(obj, "quux", 654);
obj.quux === 654;
Reflect.has({ qux: 987 }, "qux")
var obj = { bar: 456 };
Reflect.deleteProperty(obj, "bar");

// 2
({ qux: 987 }).qux
({}).qux = 654
('qux' in {qux: 654})
var obj = { bar: 456 };
delete obj.bar

// 3
try { Object.defineProperty(obj, name, desc); } catch (e) { }

if (Reflect.defineProperty(obj, name, desc)) { // success
} else { // failure }

// 4
Reflect.getOwnPropertyDescriptor
Reflect.defineProperty
Reflect.getPrototypeOf
Reflect.setPrototypeOf
Reflect.isExtensible
Reflect.preventExtensions
Reflect.enumerate
Reflect.ownKeys
Reflect.apply
Reflect.construct

```


[slide]
## Promise
---

```
// 1
var p1 = new Promise(function(resolve, reject) { resolve("foo"); });
var p2 = new Promise(function(resolve, reject) { reject("quux"); });
var score = 0;

function thenFn(result)  { score += (result === "foo");  check(); }
function catchFn(result) { score += (result === "quux"); check(); }
function shouldNotRun(result)  { score = -Infinity;   }

p1.then(thenFn, shouldNotRun);
p2.then(shouldNotRun, catchFn);
p1.catch(shouldNotRun);
p2.catch(catchFn);

p1.then(function() {
  // Promise.prototype.then() should return a new Promise
  score += p1.then() !== p1;
  check();
});

function check() {
  if (score === 4) asyncTestPassed();
}

Promise.all
Promise.race
```


[slide]
## Symbol
---

```
// 1
var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

Symbol("foo") === Symbol("foo"); // false

// 2
typeof Symbol() === "symbol";
new Symbol(); // ERROR

// 3
var symbol = Symbol.for('foo');
Symbol.for('foo') === symbol &&
   Symbol.keyFor(symbol) === 'foo';
```

[slide]
## well-known symbols
---

```javascript
// 1
Symbol.hasInstance

foo instanceof Foo
// 等同于
Foo[Symbol.hasInstance](foo)

// 2

Symbol.isConcatSpreadable
Symbol.iterator
Symbol.species
Symbol.toPrimitive
Symbol.toStringTag
Symbol.unscopables

```


[slide]
## Built-in extensions
---


[slide]
## Object static methods
---

```
// 1
var o = Object.assign({a:true}, {b:true}, {c:true});
"a" in o && "b" in o && "c" in o;

// 2
typeof Object.is === 'function' &&
  Object.is(NaN, NaN) &&
 !Object.is(-0, 0);

// 3
var o = {};
var sym = Symbol(), sym2 = Symbol(), sym3 = Symbol();
o[sym]  = true;
o[sym2] = true;
o[sym3] = true;
var result = Object.getOwnPropertySymbols(o);
result[0] === sym
  && result[1] === sym2
  && result[2] === sym3;

// 4
Object.setPrototypeOf({}, Array.prototype) instanceof Array;
```


[slide]
## function "name" property
---

```
// 1
function foo(){};
foo.name === 'foo' &&
  (function(){}).name === '';

// 2
function foo() {};
foo.bind({}).name === "bound foo" &&
  (function(){}).bind({}).name === "bound ";

// 3
class foo {};
class bar { static name() {} };
foo.name === "foo" &&
  typeof bar.name === "function";

```


[slide]
## String static methods
---

```
// 1
typeof String.raw === 'function';

// 2
name = 'Bob';
String.raw`Hi, ${name}!`;

// 3
String.fromCodePoint(65) // A
```


[slide]
## String.prototype methods
---

```
// 1
'A'.codePointAt()

String.prototype.normalize
String.prototype.repeat
String.prototype.startsWith
String.prototype.endsWith
String.prototype.includes
String.prototype[Symbol.iterator]
```


[slide]
## RegExp.prototype properties
---

```
// 1
/./igm.flags === "gim" && /./.flags === ""

```


[slide]
## Array static methods
---

```
// 1
Array.from({ 0: "foo", 1: "bar", length: 2 }) + '' === "foo,bar"

// 2
var iterable = (function*(){ yield 1; yield 2; yield 3; }());
Array.from(iterable) + '' === "1,2,3";

// 3
Array.of(1, 2); // [1, 2]

```


[slide]
## Array.prototype methods
---

```
// 1
Array.prototype.copyWithin
Array.prototype.find
Array.prototype.findIndex
Array.prototype.fill
Array.prototype.keys
Array.prototype.values
Array.prototype.entries
Array.prototype[Symbol.iterator]

```


[slide]
## Number properties
---

```
// 1
Number.isFinite
Number.isInteger
Number.isSafeInteger
Number.isNaN

Number.EPSILON
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER

```


[slide]
## Math methods
---

```javascript
Math.clz32
Math.imul
Math.sign
Math.log10
Math.log2
//...等等等
```


[slide]
## Subclassing
---

```
// 1
class C extends Array {}
var c = new C();
var len1 = c.length;
c[2] = 'foo';
var len2 = c.length;
return len1 === 0 && len2 === 3;

// 2
Array
RegExp
Function
Promise
Boolean
Number
String
Map
Set
```


[slide]
## Misc
---


[slide]
## prototype of bound functions
---

```
// 1
function correctProtoBound(proto) {
  var f = function(){};
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(f, proto);
  }
  else {
    f.__proto__ = proto;
  }
  var boundF = Function.prototype.bind.call(f, null);
  return Object.getPrototypeOf(boundF) === proto;
}
correctProtoBound(Function.prototype)
  && correctProtoBound({})
  && correctProtoBound(null);
```


[slide]
## Object static methods accept primitives
---

```
// 1
Object.getPrototypeOf('a').constructor === String;

// 2
Object.getOwnPropertyDescriptor('a', 'foo') === undefined;

// 3
Object.seal('a') === 'a';
Object.freeze('a') === 'a';
Object.preventExtensions('a') === 'a';
Object.isSealed('a') === true;
Object.isFrozen('a') === true;
Object.isExtensible('a') === false;


// 4
var s = Object.keys('a');
s.length === 1 && s[0] === '0';
```


[slide]
## own property order
---

```
// 1
var obj = {
  2:    true,
  0:    true,
  1:    true,
  ' ':  true,
  9:    true,
  D:    true,
  B:    true,
  '-1': true,
};
obj.A = true;
obj[3] = true;
Object.defineProperty(obj, 'C', { value: true, enumerable: true });
Object.defineProperty(obj, '4', { value: true, enumerable: true });
delete obj[2];
obj[2] = true;

var result = '';
for(var i in obj) {
  result += i;
}
return result === "012349 DB-1AC";

Object.keys
Object.getOwnPropertyNames
Object.assign
JSON.stringify
JSON.parse
```

[slide]
## miscellaneous
---

```
// 1
do {} while (false) return true;

// 2
try {
  eval('for (var i = 0 in {}) {}');
}
catch(e) {
  return true;
}

// 3
new RegExp(/./im, "g").global === true;
```

[slide]
## __proto__ in object literals
---

```
// 1
{ __proto__ : [] } instanceof Array
  && !({ __proto__ : null } instanceof Object);

// 2
eval("({ __proto__ : [], __proto__: {} })"); // ERROR


```


[slide]
## Object.prototype.__proto__
---

```
// 1
var A = function(){};
(new A()).__proto__ === A.prototype;

// 2
var o = {};
o.__proto__ = Array.prototype;
o instanceof Array;

// 3
Object.prototype.hasOwnProperty('__proto__'); // true

```

[slide]
## ES7 前瞻
---

```
// 1
2 ** 3 === 8

// 2
Object.observe
Array.prototype.includes

// 4
SIMD (Single Instruction, Multiple Data) 支持

// 5
typeof function f( a, b, ){} === 'function'
Math.min(1,2,3,) === 1

```

[slide]
## 续 1
---

```
// 1
return (async function(){
  return 42 + await Promise.resolve(42)
})() instanceof Promise

// 2
(async () => 42 + await Promise.resolve(42))() instanceof Promise

// 3
class A {
  @nonconf
  get B() {}
}
function nonconf(target, name, descriptor) {
  descriptor.configurable = false;
  return descriptor;
}
Object.getOwnPropertyDescriptor(A.prototype, "B").configurable === false;

```

[slide]
## 续 2
---

```
// 1
async function * nums() {
  yield 1;
  yield 2;
  yield 3;
}
var result = '';
async function printData() {
  for(var x on nums()) {
    result += x;
  }
}
result === "123";

// 2
var {a, ...rest} = {a: 1, b: 2, c: 3};
a === 1 && rest.a === undefined && rest.b === 2 && rest.c === 3;

// 3
var spread = {b: 2, c: 3};
var O = {a: 1, ...spread};
O.a + O.b + O.c === 6;
```

[slide]
## 续3
---

```
// 1
function foo() { this.garply += "foo"; return this; }
var obj = { garply: "bar" };
typeof obj::foo === "function" && obj::foo().garply === "barfoo";

// 2
var obj = { garply: "bar", foo: function() { this.garply += "foo"; return this; } };
typeof ::obj.foo === "function" && ::obj.foo().garply === "barfoo";

// 3
Object.getOwnPropertyDescriptors
Map.prototype.toJSON
Set.prototype.toJSON
String.prototype.at
String.prototype.lpad
String.prototype.rpad
Object.values
Object.entries

```

[slide]
## 续4
---

```javascript
// 1 parallel JavaScript
Array.prototype.mapPar
Array.prototype.filterPar
Array.fromPar
// ..等等

// 2
[for (a of [1, 2, 3]) a * a] + '' === '1,4,9'

// 3
[for([a, b] of [['a', 'b']])a + b][0] === 'ab'

```

[slide]
## All Done
---

Thanks

