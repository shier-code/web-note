/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-07 13:59:43
 * @LastEditors: went
 * @LastEditTime: 2022-02-07 14:48:05
 */
var obj = { message: 'global' }
var withObj = { message: 'obj message' }
function foo() {
  with (withObj) {  //专门给一个查找变量的对象
    console.log(message);
  }
}
foo()

var jsStr = 'var message="aaa";console.log(message);'

eval(jsStr)
//严格模式
//意外的全局变量，函数中重复变量