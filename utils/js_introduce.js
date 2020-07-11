// Javascript 介绍
// 说明：这部分代码是 JS 的基础，可以在「调试器」的「Console」面板中输入这部分代码查看运行结果。

// 1. 不同类型的数值
// a) number 类型
123
3.14
-1.4
3e5     // 3 乘 10 的 5 次方，在「Console」面板中输入这个值，然后按回车键试试看
0x12    // 十六进制的 12，在「Console」面板中输入这个值，然后按回车键试试看

// b) boolean 类型
true
false

// c) string 类型
// 说明：使用英文半角的单引号''或双引号""都可以，但不能使用中文的单引号‘’或双引号“”
""
"a"
'123'
"你好"
// 如果字符串中需要包含英文的双引号，可以用单引号将字符串括起来，反之亦然
'"""""""""""""'
"'''''''''''''"
// 如果字符串中需要包含两种引号，那么就必须要用反斜杠 \ 进行转义，如下面的例子
// 反斜杠表示紧跟在后面的单引号是字符串的一部分，而不是字符串的终止
// 在「Console」面板中输入这个值，然后按回车键试试看
'"Hello," he said, "I\'m very happy to meet you."'
// 双引号也可以转义，在「Console」面板中输入这个值，然后按回车键试试看
"这样可以把双引号\"放在字符串中"

// d) null 类型
null

// e) 数组类型
emptyArray = []
numberArray = [1, 2, 3]
booleanArray = [true, true, true, false, true]
stringArray = ['Tom', 'Mike', 'David']

// f) 对象类型
emptyObject = {}
personObject = {
  name: 'Amy',
  age: 18
}

// 2. 变量
// 说明：如果将以 let 开头的赋值语句放到「Console」中执行，会得到一个 undefined 的返回值，此时再次在「Console」中输入变量的名字就可以看到变量中存储的值了
let variable_1 = true // 声明第一个变量 variable_1，并为它赋值为 true
let var_2             // 声明另一个变量 var_2，声明变量时可以不为它赋值，此时它的值为 undefined
let v3 = variable_1   // 声明第三个变量 v3，并将变量 variable_1 中的值 true 赋给它
let v4 = variable_1   // 变量中的值可以反复使用，v4 的值也是 true
variable_1 = 123  // 将 variable_1 的值修改为 123，变量 v3 和 v4 的值仍然是 true

// 3、常量
// 说明：如果将以 const 开头的赋值语句放到「Console」中执行，会得到一个 undefined 的返回值，此时再次在「Console」中输入常量的名字就可以看到常量中存储的值了
const title = "我的小程序"  // 声明一个常量 title，并将一个 string 类型的值赋给它
const const_from_var = variable_1 // 可以将变量的值赋给常量，反过来也可以将常量赋值给变量

// 4、运算符
// 在「Console」面板中输入下面的语句，然后按回车键试试看。如果是 let 或 const 赋值语句，会得到 undefined 返回值，此时再在「Console」面板中重新输入变量或常量的名字试试看。
// 算术运算符
3 + 4
const pi = 3.14       // 定义一个常量 pi 作为圆周率
let area = pi * 3 * 3 // 运算符可以多次使用，运算得到的结果可以保存到一个变量中
let a = (1 + 3) * 4   // 运算符具有优先级，可以使用小括号改变优先级
// 比较运算符
1 === 3               // 结果为 false
1 !== 3               // 结果为 true
let judge = 1 < 3     // 结果为 true，并存入 judge 变量
const re = 1 > 3  // 结果为 false，并存入 re 常量
// 逻辑运算符
true && true      // 结果为 true，只有两侧值都是 true 的时候结果才为 true
true && false     // 结果为 false 
false && true     // 结果为 false
false && false    // 结果为 false
false || false    // 结果为 false，只有两侧值都是 false 的时候结果才为 false
true || false     // 结果为 true
false || true     // 结果为 true
true || true      // 结果为 true
!true             // 结果为 false
!false            // 结果为 true

// 5. 语句
// 定义见书中的介绍

// 6. 条件分支
// 样例 1，将下面这段代码复制到「Console」面板中查看结果
let count = 1
let price
if (count > 100) {
  price = 5     // 如果 count > 100，就会执行这个大括号中的内容，将 price 赋值为 5
} else if (count > 50) {
  price = 7     // 如果 count <= 100 且 count > 50，就会执行这个大括号中的内容
} else {
  price = 10    // 如果 count <= 50，就会执行这个大括号中的内容
}
// 样例结束

// 样例 1 更改条件，将下面这段代码再复制到「Console」面板中查看结果。尝试修改这段代码，改变 count 的值，看不同的值是否会走到不同的分支中去
count = 1000    // 由于前面已经定义过 count 变量了，这里不能加 let
if (count > 100) {
  price = 5     // 如果 count > 100，就会执行这个大括号中的内容，将 price 赋值为 5
} else if (count > 50) {
  price = 7     // 如果 count <= 100 且 count > 50，就会执行这个大括号中的内容
} else {
  price = 10    // 如果 count <= 50，就会执行这个大括号中的内容
}
// 样例结束

// 7. 循环语句
// 将下面的样例代码复制到「Console」面板中查看结果
// 样例1：for循环，计算1到5000的和
let result = 0          // result 变量用来保存结果
for (let i = 1; i <= 5000; i = i + 1) {
  // i 初始为 1，只要 i <= 5000，就执行下面的语句，然后 i 加 1
  // 这里定义的 i 只在 for 循环大括号内有效，出了大括号 i 就不存在了
  result = result + i // i 会从 1 循环到 5000，每次都将 i 的值加入到 result 变量中
}
// 样例结束

// 样例2：while循环，计算1到5000的和
result = 0              // 将 result 的值归零
let i = 1               // i 初始设置为 1
while (i <= 5000) {     // 只要 i 小于等于 5000，就执行大括号中的代码
  result = result + i   // 每次循环时，将 result 的值与 i 的值相加，并重新存入 result 变量
  i = i + 1             // 将 i 的值加 1
  // i++                // 等同于 i = i + 1，简便写法
}
// 样例结束

// 样例3：do-while循环，计算1到5000的和
result = 0              // 将 result 的值归零
i = 1                   // i 初始设置为 1
do {                    // 直接进入循环，先执行一次，再判断退出条件
  result = result + i   // 每次循环时，将 result 的值与 i 的值相加，并重新存入 result 变量
  i++                   // 将 i 的值加 1
} while (i <= 5000)     // 只要 i 小于等于 5000，就执行大括号中的代码
// 样例结束

// 8. 函数
// 将下面的样例代码复制到「Console」面板中查看结果，由于最后一句是 let 赋值语句，需要在「Console」面板中输入变量的名字 sum，按回车后可以看到计算结果
// 样例
function add(x, y) {    // 定义一个函数 add，这个函数可以传入两个参数
  return x + y          // 将传入的参数 x 和 y 相加，并返回
}
const c = 2
let sum = add(c, 3)     // 调用函数 add，传入参数 c 和 3，此时得到返回结果 5，存入 sum
// 样例结束
