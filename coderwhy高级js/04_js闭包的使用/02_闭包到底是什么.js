/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-24 15:23:48
 * @LastEditors: went
 * @LastEditTime: 2022-01-26 10:48:42
 */
function foo() {
  var name = "foo"
  var age = 18
  function bar() {
    console.log('bar', name);  //闭包中引用外部自由变量时没有用到age属性,js引擎将其销毁掉优化性能
  }
  return bar
}

var fn = foo()
fn()