/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-26 13:46:29
 * @LastEditors: went
 * @LastEditTime: 2022-02-28 14:35:08
 */

//柯里化：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余参数
//让函数的职责单一，不被其他参数分散注意力
function add(x, y, z) {
  return x + y + z
}
var result = add(1, 2, 3)

function sum(x) {
  x = x + 1
  return function (y) {
    y = y * 2
    return function (z) {
      z = z - 1
      return x + y + z
    }
  }
}
var sum2 = x => y => z => x + y + z
sum(1)(2)(3)

//逻辑复用
function makeAdder(count) {
  count = count * count
  return function (num) {
    return count + num
  }
}
var add5 = makeAdder(5)
add5(10)
add5(20)

let tobj = [

  {
    grade: "",
    class: "",
    sort1: {
      moonDiff: "",  
    }

  }
]