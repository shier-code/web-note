/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-21 13:43:45
 * @LastEditors: went
 * @LastEditTime: 2022-01-21 14:31:00
 */

//作为参数
function calc(n1, n2, calcFn) {
  console.log(calcFn(n1, n2));
}

function add(n1, n2) {
  return n1 + n2
}
function sub(n1, n2) {
  return n1 - n2
}
calc(10, 20, add)

//作为返回值
function makeAdder(count) {
  return function add(num) {
    return count + num
  }
}
var add5 = makeAdder(5)
console.log(add5(10));
var add2 = makeAdder(2)

