/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-03 15:30:51
 * @LastEditors: went
 * @LastEditTime: 2022-03-03 16:20:18
 */
const promise = Promise.resolve({ name: 'shier' })
//相当于
const promise2 = new Promise((resolve, reject) => {
  resolve({ name: 'shier' })
})

//all  所有的promise都变成fulfied,再拿到结果,拿到结果之前有一个reject，那么整个promise是reject
Promise.all([promise, promise2, 'aaa']).then(res => {
  console.log(res);
})
//allSettled  所有的promise都有结果后返回每个的状态和值
Promise.allSettled([promise, promise2, 'aaa']).then(res => {
  console.log(res);
}).catch(err => {

})
//race  只要有一个变成fulfilled,用其结果作为then的结果
Promise.race([promise, promise2, 'aaa']).then(res => {
  console.log(res);
})
//any 
Promise.any([promise, promise2, 'aaa']).then(res => {
  console.log(res);
})
