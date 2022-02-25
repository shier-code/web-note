/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-21 16:33:39
 * @LastEditors: went
 * @LastEditTime: 2022-02-23 16:37:31
 */
const obj = {
  name: 'why',
  age: 19
}

const objProxy = new Proxy(obj, {
  //获取值的捕获器
  get: function (target, key) {  //target:原对象obj
    console.log('监听' + obj + '的' + key + '被访问了');

  },
  set: function (target, key, newValue) {
    console.log('监听' + obj + '被设置值');
    target[key] = newValue
  },
  //监听 in 的捕获器
  has: function (target, key) {
    return key in target
  },
  //监听delete
  deleteProperty: function (target, key) {
    delete target[key]
  },
  apply: function (target, thisArg, argArray) {
    return target.apply(thisArg, argArray)
  },
  construct: function (target, argArray) {
    console.log('对foo函数进行了new调用');
    return new target(...argArray)
  }
})
console.log(objProxy.age);
