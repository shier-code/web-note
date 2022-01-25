/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-24 15:23:48
 * @LastEditors: went
 * @LastEditTime: 2022-01-24 15:28:38
 */
function foo() {
  var name = "foo"
  function bar() {
    console.log('bar', name);
  }
  return bar
}

var fn = foo()
fn()