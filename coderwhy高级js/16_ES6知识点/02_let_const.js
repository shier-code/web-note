/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-17 14:59:01
 * @LastEditors: went
 * @LastEditTime: 2022-02-17 15:40:01
 */
//如果传递的是一个引用类型（内存地址），可以修改对象属性
const obj = {
  foo: 'oo'
}
obj.foo = 'aa'
//let :不能重复声明  不能作用域提升  有块级作用域

console.log(age);  //age被创建，但不能被访问
let age = 10

//let const内存说明
//最新标准，每个执行上下未会关联一个变量环境（VE）,而不再是VO,  V8引擎是通过hashmap实现一个variablemap来保存这些变量
