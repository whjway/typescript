// 原始类型
let bool: boolean = true;
let str: string = "abc";
let num: number | undefined | null = 123; // 联合类型

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, "4"];
let arr3: Array<boolean> = [false, true];

// 元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let tuple: [number, string] = [0, "1"];
tuple.push(2); // 原则上不可以改变，允许 push 应该是一个TypeScript 的一个缺陷
tuple.forEach((item) => {
  console.log(item);
});
console.log(tuple);
// console.log(tuple[2]);

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;

// 对象
/**
 * let obj: object // 表示非原始类型(非string/boolean/number/symbol/null/undefined)
 * let obj: Object // TypeScript定义的标准JavaScript Object接口(按ctr可查看)
 * let obj: {} // 表示一个空对象类型
 */
// let obj: object = { x: 1, y: 2 };
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;
console.table(obj);

// symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined null 是所有类型的子集
let un: undefined = undefined;
let nu: null = null;
num = undefined;
console.log(num, "num");

// void void类型像是与any类型相反，它表示没有任何类型
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
let noReturn = () => {};
function warnUser(): void {
  console.log("This is my warning message");
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable1: void = undefined;
// OK if `--strictNullChecks` is not given
// 更改配置需重启项目
let unusable2: void = null;

// any 跟js语法一样
let x;
x = 1;
x = [];
x = () => {};

// never
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error("异常");
}

function infiniteLoop(): never {
  while (true) {}
}
