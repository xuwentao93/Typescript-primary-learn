// eslint-disable-next-line spaced-comment
/// <reference path='child.ts' />

const number: number = 1
const string: string = '1'
interface TypeCheck {
  name: string,
  age: number
}
const obj: TypeCheck = {
  name: '1',
  age: 1
}


export { obj, number, string }
// const test: [number, void] = [null, null]
// 总结: number[] 是表示元素中都为数字的数组, [number, string] 只能表示数组的长度为2.
// null, undefined 是任何类型的子集, 所以任何类型的值设置成他们都是通过的.
// void 类型的值只能是 null 和 undefined.

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

// interface Named {
//   name: string
// }
// let x: Named
// const y = { name: 'Alice', location: 'Seattle' }
// x = y // 这段赋值要注意, y 中必须包含 name 字段, 简单来说赋值怎么也要类型相同.

// let x = (a: number) => 0
// let y = (b: number, s: string) => 0
// y = x // OK
// x = y // Error  // 然而函数的赋值和平常思维略有不同, 那是因为忽略参数在函数中, 是一件非常常见的事情.

// let x = () => ({ name: 'Alice' })
// let y = () => ({ name: 'Alice', location: 'Seattle' })
// x = y // OK
// y = x // Error, because x() lacks a location property. // 但是返回值就根正常思维相同了.

// enum Status { Ready, Waiting }
// enum Color { Red, Blue, Green }
// let x: Status = Status.Ready
// x = Color.Red // 数字可以是枚举类型, 这样的话赋值另一个枚举类型就会报错.

// class Animal {
//   feet: number
//   hello: string
// }
// class Size {
//   feet: number
//   static x: number = 1
// }
// let a: Animal
// let s: Size
// a = s // Error
// s = a // OK      // 类赋值的时候, 静态成员会被忽略, 但是成员属性不能少赋多.

// let identity = function<T>(x: T): T {
//   // ...
// }

// let reverse = function<U>(y: U): U {
//   // ...
// }

// identity = reverse  // OK, because (x: any) => any matches (y: any) => any
// 对于没指定泛型类型的泛型参数时，会把所有泛型参数当成any比较。

// interface Bird {
//   fly(): number
//   layEggs(): number
// }
// interface Fish {
//   swim(): void
//   layEggs(): number
// }
// function getSmallPet(): Fish | Bird {
//   return {
//     swim(): void {
//       console.log(1)
//     },
//     layEggs(): number {
//       return 1
//     }
//   }
// }
// function isFish(pet: (Fish | Bird)): pet is Fish {
//   return (<Fish>pet).swim === undefined
// }
// let pet = getSmallPet()
// pet.layEggs() // okay
// pet.swim() // error
// // 在联合类型当中, 对象表示共有的同名属性, 否则就需要断言进行强制类型转化, 否则会报错.
// if (isFish(pet)) {
//   pet.swim()
// }
// if ((<Fish>pet).swim) {
//   (<Fish>pet).swim()
// }
// console.log(pet) // 用 is 谓语介词进行判断, 避免一直使用断言.
// 当然还有更简便的方法, 在基本数据类型中使用 typeof, 在引用类型中使用 instanceof.

// function broken(name: string | null): string {
//   function postfix(epithet: string) {
//     return name.charAt(0) + '.  the ' + epithet // error, 'name' is possibly null
//   }
//   name = name || 'Bob'
//   return postfix('great')
// }

// function fixed(name: string | null): string {
//   function postfix(epithet: string) {
//     return name!.charAt(0) + '.  the ' + epithet // ok
//   }
//   name = name || 'Bob'
//   return postfix('great')
// } // 这是一个在 string 中去除 null 的情况, 下面的方法和上面相同, 唯一的区别就是150行name后面多了个!.

// type Name = string
// type NameResolver = () => string
// type NameOrResolver = Name | NameResolver
// 如上是类型别名的例子, 一般用于比较复杂的类型. 起名字并不会创建一个新的类型, 而是一个新的引用.
// 不过他们不能继承类和实现接口, 也不能被用于继承和实现, 所以更推荐用 interface 去描述.

// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
// 声明一个类型为Easing, 可以让值为其中几个之一. 这在写组件的时候对类型判断非常有用.

// function test(number: number): (1 | '1') {
//   return 1
// interface Base {
//   pinned: 'p'
//   number: number
// }
// } // 定死返回的值, 而不是单单的类型.


// interface Square {
//   kind: "square";
//   size: number;
// }
// interface Rectangle {
//   kind: "rectangle";
//   width: number;
//   height: number;
// }
// interface Circle {
//   kind: "circle";
//   radius: number;
// }
// type Shape = Square | Rectangle | Circle;
// function area(s: Shape) {
//   switch (s.kind) {
//       case "square": return s.size * s.size;
//       case "rectangle": return s.height * s.width;
//       case "circle": return Math.PI * s.radius ** 2;
//   }
// } // 这个是一个很好的例子.

let s: number | null = 1
s = null

// class Father {
//   number: number
//   add(number: number) { // 注意这个类会返回Father类.
//     this.number += number
//     return this
//   }
//   reduce(number: number): this { // 注意这个类会返回Father 类的子类.
//     this.number -= number
//     return this
//   }
// }
// function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
//   return names.map((n) => o[n])
// }

// interface Person {
//   name: string;
//   age: number;
// }
// let person: Person = {
//   name: 'Jarid',
//   age: 35
// }
// let strings: string[] = pluck(person, ['name']) // ok, string[]

// // 下面我们定义类型:
// interface Base {
//   name: string,
//   age: number,
//   height: number
// }
// const base: Base = {
//   name: 'wentao',
//   age: 22,
//   height: 188
// }
// // 如下引用: (T 为 base)
// function test<T, U extends keyof T>(objs: T, keys: U[]): T[U][] {
//   return keys.map(key => objs[key])
// }
// // 然后我们这样调用它:
// test(base, ['name', 'age']) // 'wentao', 22
// 他很难理解, 尤其是T[U][] 的返回部分, 这里要在多看看.
// 这里, U 相当于是 "name" | "age", 两者完全可以互换, 不过用 keyof 可以针对更多/更少的属性字段.
// 仔细思考在后续的组件库编写中, 是否会用到他.

// Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
// Extract<T, U> -- 提取T中可以赋值给U的类型。
// NonNullable<T> -- 从T中剔除null和undefined。
// ReturnType<T> -- 获取函数返回值类型。
// InstanceType<T> -- 获取构造函数类型的实例类型。
// Ts 内置的几种类型.

//
// class A {
//   number: number
// }
// export { A } // ts 导出, 加大括号.

// interface Test {
//   name: string,
//   same: string
// }
// interface Test {
//   number: number
//   same: string // 必须为string, 同名的除了函数类型必须相同.
// }
// const test: Test = {
//   name: '1',
//   number: 1
// } // 多个同名接口可以合并. 注意, 同名的命名空间, 如果某个变量没有导出但是在另一个
// 同名的命名空间中使用, typescript 会报错.

let x: StringTool = {
  str: '1'
}
