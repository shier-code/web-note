/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-01-26 15:05:08
 * @LastEditors: went
 * @LastEditTime: 2022-01-26 15:37:56
 */
function hyCurrying(fn) {
  function curried(...args) {
    //判断当前已经传入参数的个数大于等于需要的参数个数时，
    if (args.length >= fn.length) {  //函数名.length可获取到该函数参数个数
      return fn.apply(this,args)
    } else {
      //没有达到个数时，需要返回一个新的函数继续接收参数
      return function (...args2) {
        //递归调用curried检查函数的个数是否达到
        return curried.apply(this, [...args,...args2])
      }
    }
  }
  return curried
}

function add1(x, y, z) {
  return x + y + z
}
var curryAdd = hyCurrying(add1)

console.log('---', curryAdd(1, 2, 3));
