/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-03 16:23:22
 * @LastEditors: went
 * @LastEditTime: 2022-03-07 16:45:53
 */
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'
class HYPromise {
  constructor(executor) {
    this.status = PROMISE_STATUS_PENDING
    this.value = undefined
    this.reason = undefined
    const resolve = (value) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        // setTimeout(() => {
        //   this.status = PROMISE_STATUS_FULFILLED
        //   this.value = value
        //   this.onFulfilled(this.value)
        //   console.log('resolve被调用');
        // }, 0)
        this.status = PROMISE_STATUS_FULFILLED
        queueMicrotask(() => {
          this.value = value
          this.onFulfilled(this.value)
          console.log('resolve被调用');
        })
      }
    }
    const reject = (reason) => {
      if (this.status === PROMISE_STATUS_PENDING) {
        this.status = PROMISE_STATUS_REJECTED
        queueMicrotask(() => {
          this.reason = reason
          this.onRejected(this.reason)
          console.log('rejected被调用');
        })
      }
    }
    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    this.onFulfilled = onFulfilled
    this.onRejected = onRejected
  }
}
const promise = new HYPromise((resolve, reject) => [

  reject('111'),
  resolve('2222'),

]).then(res => {
  console.log('res===', res);
}, err => {
  console.log('err===', err);
})