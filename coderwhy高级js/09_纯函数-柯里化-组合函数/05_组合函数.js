/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-27 16:51:21
 * @LastEditors: went
 * @LastEditTime: 2022-01-27 17:20:43
 */
function double(num) {
  return num * 2
}
function square(num) {
  return num * num
}
var result = square(double(10))  //普通方式调用两个函数
//两个函数
function composeFn(m, n) {
  return function (count) {
    return n(m(count))
  }
}
// var newFn = composeFn(double, square)
// console.log(newFn(10));
//多个函数
function hyCompose(...fns) {
  var length = fns.length
  for (var i = 0; i < length; i++) {
    if (typeof fns[i] !== 'function') {
      throw new TypeError('Expect arguments are function')
    }
  }
  return function (...args) {
    var index = 0
    var result = length ? fns[index].apply(this, args) : args
    while (++index < length) {
      result = fns[index].call(this,result)
    }
    return result

  }
}
var newFn = hyCompose(double, square)
console.log(newFn(10));
