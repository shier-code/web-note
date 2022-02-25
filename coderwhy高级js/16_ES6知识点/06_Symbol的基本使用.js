/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-18 14:58:41
 * @LastEditors: went
 * @LastEditTime: 2022-02-18 15:11:12
 */
var s1 = Symbol()
var s2 = Symbol()
const obj = {
  [s1]: 'abc',
  [s2]: 'cba'
}
console.log('===', obj[s1]);
//在遍历/Object.keys是获取不到symbol值的
const skeys = Object.getOwnPropertySymbols(obj)
for (const key of skeys) {
  console.log(obj[key]);
}

const sa = Symbol.for('aaa')
const sb = Symbol.for('aaa')
console.log(sa === sb); //true
