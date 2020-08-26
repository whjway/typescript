// 枚举 一组没有名字的常量集合 通讯录

// 数字枚举
// 原理 反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

console.log(Role, "enum ");
console.log(Role.Reporter, "enum Reporter");

// 字符串枚举
enum Message {
  Success = "恭喜，成功了",
  Fail = "抱歉，失败",
}
console.log(Message, "enum");
console.log(Message.Success, "enum Success");

// 异构枚举
enum Answer {
  N,
  Y = "Yes",
}
console.log(Answer, "enum");
console.log(Answer.N, "enum N");
console.log(Answer.Y, "enum Y");

// 枚举成员
// Role.Reporter = 2;
enum Char {
  // const 编译时计算出结果
  a,
  b = Char.a,
  c = 1 - 3,
  // computed 执行时计算结果 之后不能出现const
  d = Math.random(),
  e = "123".length,
}

console.log(Char, "Char");

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar,
}
let month = [Month.Jan, Month.Feb, Month.Mar];
console.log(month, "month");

enum E {
  a,
  b,
}
enum F {
  a = 3,
  b = 4,
}
enum G {
  a = "apple",
  b = "banana",
}

let e: E = 3;
let f: E = 3;
// let f: F = 3;
console.log(e === f);
console.log(e, "e");
console.log(E, "E");

let e1: E.a = 1;
let e2: E.b;
let e3: E.a = 1;
// console.log(e1 === e2);
console.log(e3 === e1);

let g1: G = G.b;
let g2: G.a;
let g3: G = G.b;

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

enum RoleEnum {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

function initByRole(role: RoleEnum) {
  if (role === RoleEnum.Reporter || role === RoleEnum.Developer) {
    // do sth
  } else if (role === RoleEnum.Maintainer || role === RoleEnum.Owner) {
    // do sth
  } else if (role === RoleEnum.Guest) {
    // do sth
  } else {
    // do sth
  }
}
