/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-25 16:54:47
 * @LastEditors: went
 * @LastEditTime: 2022-02-25 17:35:30
 */
//通过Depend类收集依赖
class Depend {
  constructor() {
    this.reactiveFns = []
  }
  addDepend(reactiveFn) {
    this.reactiveFns.push(reactiveFn)
  }
  notify() {
    //遍历执行所有function
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}
const depend = new Depend()
//响应式函数
function watchFn(fn) {
  depend.addDepend(fn)
}

const obj = {
  name: 'why',  //一个属性对应一个dep对象
  age: 18
}
//监听对象属性变化
const objProxy = new Proxy(obj, {
  get: function (target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set: function (target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
    depend.notify()
  }
})
watchFn(function () {
  console.log(objProxy.name);
})

objProxy.name = 'code'
objProxy.name = 'shier'





