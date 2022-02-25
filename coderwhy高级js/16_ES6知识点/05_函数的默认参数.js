/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-18 13:43:44
 * @LastEditors: went
 * @LastEditTime: 2022-02-18 14:04:25
 */
function foo(m, n) {
  m = m || 'a'
  n = n || 'b'
}

foo(0, '')   //产生bug

function bar(m = 'a', n = 'b') {
  m = m || 'a'
  n = n || 'b'
}
//对象参数和默认值及解构
function printInfo({ name, age } = { name: 'why', age: 18 })

printInfo({ name: 'shie', age: 10 })

