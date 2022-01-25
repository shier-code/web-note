/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-20 14:13:05
 * @LastEditors: went
 * @LastEditTime: 2022-01-20 14:27:44
 */
var message = "global"

function foo() {
  console.log(message);

}

function bar() {
  var message = 'bar'
  foo()   //在该函数执行上下文中，先找自身的AO,没找到沿着作用域链去父级作用域找，父级作用与为GO,故结果为global
}
bar()