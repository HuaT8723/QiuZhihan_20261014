// 区分大小写
let a = 10;
console.log(a)
let A = 20;
console.log(A)

//弱类型变量: 数据类型动态变化
let name = '张三'
console.log(typeof(name))
name = 100
console.log(typeof(name))

const age = 18 // 常量: 不能改变的变量
console.log(age)
// age = 20
// console.log(age)

function sayHello() {
    let a = 10000;
    console.log(a)
}
sayHello()
// alert(a)
// confirm('确认吗？')
// num3 = prompt('请输入姓名')
// alert(typeof(num3))
// alert(typeof(parseInt(num3)))
// let num1 = 10.1
// alert(parseInt(num1))
// let num2 = 10
// alert(parseFloat(num2))

// undefined: 未定义
let gril;
console.log(typeof(gril))
let boy = "lisi";
console.log(typeof(boy))

// boolean: 布尔值 true false
let isTrue = true;
console.log(typeof(isTrue))
let isFalse = "false";
console.log(typeof(isFalse))

// 字符串模版: 可以在字符串中嵌变量 方便输出
let age2 = 19;
let name2 = "Qiu_Zhihan";
let greeting = `你好，我是${name2}，我今年${age2}岁`;
console.log(greeting)

let str = "你好，我是" + name2 + "，我今年" + age2 + "岁";
console.log(str)

// 字符串属性和方法
console.log(name2.length)
console.log(name2.charAt(0))
let subName2 = name2.substring(0, 3)
console.log(subName2)
let subName22 = name2.slice(0, 3)
console.log(subName22)
console.log(name2.indexOf('i'))
console.log(name2.lastIndexOf('i'))

// 数值转字符串
let num = 100;
console.log(typeof(num))
let numStr = num.toString()
console.log(typeof(numStr))

console.log('20261014 JS基础学习 Qiu_Zhihan')