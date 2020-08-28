"use strict";
function render(result) {
    result.data.forEach(function (value) {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
        // value.id++;
    });
}
// 1 传入变量
var result = {
    data: [
        {
            id: 1,
            name: "A",
            sex: 12,
        },
        {
            id: 2,
            name: "B",
        },
    ],
};
render(result);
var chars = ["A", "B"];
console.log(chars[1]);
console.log(chars[3]);
var names = {
    xiaoming: "xiaoming",
    xiaohong: "xiaohong",
    1: 1,
};
console.log(names.xiaoming);
