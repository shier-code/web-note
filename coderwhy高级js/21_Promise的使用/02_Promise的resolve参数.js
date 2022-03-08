/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-02 17:50:04
 * @LastEditors: went
 * @LastEditTime: 2022-03-02 17:53:30
 */

const newPm = new Promise((resolve, reject) => {
  resolve('2')
})

new Promise((resolve, reject) => {
  resolve(newPm)    //如果resolve传入一个promise,n那么当前的promise状态又传入的promise决定
}).then(res => {
  console.log(res);
})

