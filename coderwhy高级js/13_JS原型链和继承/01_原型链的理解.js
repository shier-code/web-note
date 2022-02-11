/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-08 10:38:20
 * @LastEditors: went
 * @LastEditTime: 2022-02-08 10:43:33
 */
var obj = {
  name: 'sjoer',
  age: 19
}
obj.__proto__ = {}

obj.__proto__.__proto__ = {
  address: '成都市'
}

console.log(obj.address); //{{get}}操作，现在当前对象中查找属性，没找到沿着原型链查找
