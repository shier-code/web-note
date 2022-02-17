/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-11 14:19:36
 * @LastEditors: went
 * @LastEditTime: 2022-02-11 14:30:20
 */
var obj = {
  name: 'shier',
  age: 19
}

function createObject1(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

function createObject2(o) {
  var newObj = {}
  function Fn() { }
  Fn.prototype = o
  var newObj = new Fn()
  return newObj
}
//ECMA

var info = Object.create(obj)
console.log('---info', info.__proto__);
