/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-02 17:50:04
 * @LastEditors: went
 * @LastEditTime: 2022-03-03 15:07:08
 */


const promise = new Promise((resolve, reject) => {
  resolve('newPm')    //如果resolve传入一个promise,n那么当前的promise状态又传入的promise决定
})
promise.then(res => {
  console.log(res);  //当resolve执行回调时，所有then方法传入的回调函数都会被调用
})
promise.then(res => {
  console.log(res);
})
promise.then(res => {   //
  //  return 'aaaaaa'  //then方法中的回调函数也会有返回值，普通数据类型等同于是一个新的promise，普通值作为一个新的promise的resolve值
  return new Promise((resolve) => {
    resolve('aaaaaa')
  })
}).then(res => {
  console.log('res====', res)
  throw new Error('err in inner promise');
}
).catch(err => {
  console.log('err', err);  //catch是ES6自身的实现，不符合promise a+规范，
})

