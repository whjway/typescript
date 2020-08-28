let add1 = (x: number, y: number): number => x + y;
// function add1(x: number, y: number): number {
//   return x + y;
// }
console.log(add1(1, 2));

let add2: (x: number, y: number) => number;
add2 = (x, y) => x + y;
console.log(add2(1, 2));

// 类型别名
type Add1 = (x: number, y: number) => number;
let add3: Add1 = (a, b) => a + b;
console.log(add3(3, 4));

// 接口
interface Add2 {
  (x: number, y: number): number;
}
let add4: Add2 = (a, b) => a + b;
console.log(add4(4, 5));

// 混合类型接口 一个接口既可以是函数也可以像对象一样拥有属性和方法
interface Lib {
  (): void;
  version: string;
  doSth(): void;
}
// 全局暴露 单例lib
let lib: Lib = (() => {}) as Lib;
lib.version = "1.0.0";
lib.doSth = () => {};

// 封装
function getLib() {
  let lib: Lib = (() => {}) as Lib;
  lib.version = "1.0.0";
  lib.doSth = () => {
    console.log("doSth");
  };

  return lib;
}

let lib1 = getLib();
console.log(lib1.version);

let lib2 = getLib();
lib2.doSth();
