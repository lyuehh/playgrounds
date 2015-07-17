title: ES6 简介
speaker: 王伟伟
url: todo
transition: move
files: 
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
* [Understanding ECMAScript 6 ](Understanding ECMAScript 6) <span class="label label-default">by Nicholas C. Zakas</span>
* [Exploring ES6](https://leanpub.com/exploring-es6/read)<span class="label label-default">by Axel Rauschmayer</span> 
* [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/intro) <span class="label label-default">by ruanyifeng</span>
* [Learn ES2015](https://babeljs.io/docs/learn-es2015/)<span class="label label-default">by babel</span>

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
"foo bar"() { return 4; } })["foo bar"]() === 4

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
return `foo bar
${a + "z"} ${b.toLowerCase()}` === "foo bar\nbaz qux"

// 2
var called = false;
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
fn `foo${123}bar\n${456}` && called
```


[slide]
## RegExp "y" and "u" flags
---

```
// 1
var re = new RegExp('\\w');
var re2 = new RegExp('\\w', 'y');
re.exec('xy');
re2.exec('xy');
(re.exec('xy')[0] === 'x' && re2.exec('xy')[0] === 'y')

// 2
"𠮷".match(/^.$/u)[0].length === 2
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

```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```


[slide]
## 
---

```
```













