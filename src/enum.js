"use strict";
// 枚举 一组没有名字的常量集合 通讯录
// 数字枚举
// 原理 反向映射
var Role;
(function (Role) {
    Role[Role["Reporter"] = 1] = "Reporter";
    Role[Role["Developer"] = 2] = "Developer";
    Role[Role["Maintainer"] = 3] = "Maintainer";
    Role[Role["Owner"] = 4] = "Owner";
    Role[Role["Guest"] = 5] = "Guest";
})(Role || (Role = {}));
console.log(Role, "enum ");
console.log(Role.Reporter, "enum Reporter");
// 字符串枚举
var Message;
(function (Message) {
    Message["Success"] = "\u606D\u559C\uFF0C\u6210\u529F\u4E86";
    Message["Fail"] = "\u62B1\u6B49\uFF0C\u5931\u8D25";
})(Message || (Message = {}));
console.log(Message, "enum");
console.log(Message.Success, "enum Success");
// 异构枚举
var Answer;
(function (Answer) {
    Answer[Answer["N"] = 0] = "N";
    Answer["Y"] = "Yes";
})(Answer || (Answer = {}));
console.log(Answer, "enum");
console.log(Answer.N, "enum N");
console.log(Answer.Y, "enum Y");
// 枚举成员
// Role.Reporter = 2;
var Char;
(function (Char) {
    // const 编译时计算出结果
    Char[Char["a"] = 0] = "a";
    Char[Char["b"] = 0] = "b";
    Char[Char["c"] = -2] = "c";
    // computed 执行时计算结果 之后不能出现const
    Char[Char["d"] = Math.random()] = "d";
    Char[Char["e"] = "123".length] = "e";
})(Char || (Char = {}));
console.log(Char, "Char");
var month = [0 /* Jan */, 1 /* Feb */, 2 /* Mar */];
console.log(month, "month");
var E;
(function (E) {
    E[E["a"] = 0] = "a";
    E[E["b"] = 1] = "b";
})(E || (E = {}));
var F;
(function (F) {
    F[F["a"] = 3] = "a";
    F[F["b"] = 4] = "b";
})(F || (F = {}));
var G;
(function (G) {
    G["a"] = "apple";
    G["b"] = "banana";
})(G || (G = {}));
var e = 3;
var f = 3;
// let f: F = 3;
console.log(e === f);
console.log(e, "e");
console.log(E, "E");
var e1 = 1;
var e2;
var e3 = 1;
// console.log(e1 === e2);
console.log(e3 === e1);
var g1 = G.b;
var g2;
var g3 = G.b;
console.log(G);
console.log(g1 === g3);
g1 = G.a;
console.log(g1);
console.log(g3);
// 示例
// 可读性差：很难记住数字含义
// 可维护性差：硬编码，牵一发动全身
// function initByRole(role) {
//   if (role === 1 || role === 2) {
//     // do sth
//   } else if (role === 3 || role === 4) {
//     // do sth
//   } else if (role === 5) {
//     // do sth
//   } else {
//     // do sth
//   }
// }
var RoleEnum;
(function (RoleEnum) {
    RoleEnum[RoleEnum["Reporter"] = 1] = "Reporter";
    RoleEnum[RoleEnum["Developer"] = 2] = "Developer";
    RoleEnum[RoleEnum["Maintainer"] = 3] = "Maintainer";
    RoleEnum[RoleEnum["Owner"] = 4] = "Owner";
    RoleEnum[RoleEnum["Guest"] = 5] = "Guest";
})(RoleEnum || (RoleEnum = {}));
function initByRole(role) {
    if (role === RoleEnum.Reporter || role === RoleEnum.Developer) {
        // do sth
    }
    else if (role === RoleEnum.Maintainer || role === RoleEnum.Owner) {
        // do sth
    }
    else if (role === RoleEnum.Guest) {
        // do sth
    }
    else {
        // do sth
    }
}
