/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-17 14:59:01
 * @LastEditors: went
 * @LastEditTime: 2022-02-18 11:28:23
 */
//如果传递的是一个引用类型（内存地址），可以修改对象属性
var foo = 'foo'

if (true) {
  console.log(foo);//无法访问
  let foo = 'abc'
}

function bar() {
  console.log(foo);//无法访问
  let foo = 'abc'
}