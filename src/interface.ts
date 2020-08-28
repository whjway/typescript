interface List {
  readonly id: number; // 只读属性 不允许修改
  name: string;
  //   [x: string]: any; // 3 字符串索引签名
  age?: number; // 可选属性
}

interface Result {
  data: List[];
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++;
  });
}

// 1 传入变量
let result = {
  data: [
    {
      id: 1,
      name: "A",
      sex: 12, // 传入对象满足必要条件即可
    },
    {
      id: 2,
      name: "B",
    },
  ],
};

render(result);

// 直接传入字面量会报错，有三种解决方式

// render({
//   data: [
//     {
//       id: 1,
//       name: "A",
//       sex: 12,
//     },
//     {
//       id: 2,
//       name: "B",
//     },
//   ],
// });

// 2 类型断言
// 两种写法，建议第一种，第二种react有可能引起歧义
// render({
//   data: [
//     {
//       id: 1,
//       name: "A",
//       sex: 12,
//     },
//     {
//       id: 2,
//       name: "B",
//     },
//   ],
// } as Result);

// render(<Result>{
//   data: [
//     {
//       id: 1,
//       name: "A",
//       sex: 12,
//     },
//     {
//       id: 2,
//       name: "B",
//     },
//   ],
// });

// 当不确定接口中属性个数时需要使用 索引签名
// 索引签名包括字符串索引签名和数字索引签名

interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["A", "B"];
console.log(chars[1]);
console.log(chars[3]);

interface Names {
  [x: string]: any;
  [y: number]: number;
}

let names: Names = {
  xiaoming: "xiaoming",
  xiaohong: "xiaohong",
  1: 1,
  //   1: "1",
};
console.log(names.xiaoming);
