/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-23 17:10:40
 * @LastEditors: went
 * @LastEditTime: 2022-02-25 16:11:57
 */

const obj = {
  _name: 'shier',
  get name() {
    return this._name
  },
  set name(newVal) {
    this._name = newVal
  }
}
const objProxy = new Proxy(obj, {
  //获取值的捕获器
  get: function (target, key, receiver) {  //target:原对象obj
    console.log('监听' + obj + '的' + key + '被访问了');
    return Reflect.get(target, key, receiver)   //receiver指向代理对象：objProxy,改变原对象get中this的指向
  },
  set: function (target, key, newValue) {
    // console.log('监听' + obj + '被设置值');
    // target[key] = newValue
    Reflect.set(target, key, newValue)
  },
  //监听 in 的捕获器
  has: function (target, key) {
    return key in target
  },
  //监听delete
  deleteProperty: function (target, key) {
    delete target[key]
  }
})
console.log(objProxy.name);


var table = {
  grade: "",
  class: "",

}

