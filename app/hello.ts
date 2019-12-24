const hello: number = 1

export default hello

// const test: [number, void] = [null, null]
// 总结: number[] 是表示元素中都为数字的数组, [number, string] 只能表示数组的长度为2.
// null, undefined 是任何类型的子集, 所以任何类型的值设置成他们都是通过的.
// void 类型的值只能是null 和 undefined.

// enum Color { Red = 3, Green = 6, Blue }
// let test: Color = Color.Blue    此时 c 的值为7.
// 总结: 总的来说就像自动加1的数组, 就是有个好听的名字, 初始值为0, 可以设置各个东西的值.
// 不设置的话, 就为左边的值 + 1.

// let test = 1  可以不设置变量的初始类型, 但是 ts 会给他们自动设置.
// test = '1'    这行代码会报错, 不能讲数字分配给字符串.

// const staticArray: ReadonlyArray<number> = [1, 2, 3, 4]
// ReadonlyArray 里面的值完全不可修改.

// interface SquareConfig {
//   color?: string
//   readonly width?: number
//   [propName: string]: any
// }
// readonly: 只读的, ? 表示改属性可选, 没有问号表示必选. interface 中不同的变量间可以用分号, 逗号,
// 或者什么都不用. 注意: 属性名字不能拼错. [] 中的参数表示可选参数.

// function test<T, U>(number1: T, number2: U): T {
//   if (typeof number2 === 'number') {
//     return number1
//   } else return undefined
// }

// test<number, number>(1, 1)
// test<number, string>(1, '1') // 多个泛型参数的例子. 注意类的静态部分不能使用泛型.

// interface getLength {
//   length: number
// }

// function test<T extends getLength>(arg: T): number {
//   return arg.length
// }

// test({ as: 10, length: 10 }) // 泛型继承的例子, 要求必须包含length, 但是对象其他属性就随意了.

// interface Clock {
//   name: string
// }
// interface Merge {
//   merge: string
// }
// interface NewClock extends Clock, Merge {
//   newName: string
// } // 接口可以被继承, 就当两个合并了. 一个接口可以继承多个接口.
// 接口可以继承类(名字: a), 包括类中的 protected 和 private 变量.
// 如果这么做了, 那么如果一个类要继承这个接口, 必须继承这个类(a).
