"use strict";
// 原始类型
var bool = true;
var str = "abc";
var num = 123; // 联合类型
// 数组
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, "4"];
var arr3 = [false, true];
// 元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var tuple = [0, "1"];
tuple.push(2); // 原则上不可以改变，允    许 push 应该是一个TypeScript 的一个缺陷
tuple.forEach(function (item) {
    console.log(item);
});
console.log(tuple);
// console.log(tuple[2]);
// 函数
var add = function (x, y) { return x + y; };
var compute;
compute = function (a, b) { return a + b; };
// 对象
/**
 * let obj: object // 表示非原始类型(非string/boolean/number/symbol/null/undefined)
 * let obj: Object // TypeScript定义的标准JavaScript Object接口(按ctr可查看)
 * let obj: {} // 表示一个空对象类型
 */
// let obj: object = { x: 1, y: 2 };
var obj = { x: 1, y: 2 };
obj.x = 3;
console.table(obj);
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2);
// undefined null 是所有类型的子集
var un = undefined;
var nu = null;
num = undefined;
console.log(num, "num");
// void void类型像是与any类型相反，它表示没有任何类型
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
var noReturn = function () {
};
function warnUser() {
    console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
var unusable1 = undefined;
// OK if `--strictNullChecks` is not given
// 更改配置需重启项目
var unusable2 = null;
// any 跟js语法一样
var x;
x = 1;
x = [];
x = function () {
};
// never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("异常");
}
function infiniteLoop() {
    while (true) {
    }
}
