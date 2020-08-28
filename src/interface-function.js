"use strict";
var add1 = function (x, y) { return x + y; };
// function add1(x: number, y: number): number {
//   return x + y;
// }
console.log(add1(1, 2));
var add2;
add2 = function (x, y) { return x + y; };
console.log(add2(1, 2));
var add3 = function (a, b) { return a + b; };
console.log(add3(3, 4));
var add4 = function (a, b) { return a + b; };
console.log(add4(4, 5));
// 全局暴露 单例lib
var lib = (function () { });
lib.version = "1.0.0";
lib.doSth = function () { };
// 封装
function getLib() {
    var lib = (function () { });
    lib.version = "1.0.0";
    lib.doSth = function () {
        console.log("doSth");
    };
    return lib;
}
var lib1 = getLib();
console.log(lib1.version);
var lib2 = getLib();
lib2.doSth();
