/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-25 16:54:47
 * @LastEditors: went
 * @LastEditTime: 2022-03-08 10:56:26
 */

/**
 * 观察者 Watcher
 * 数据发生变化时通知它，然后它再通知其他地方
 * 为什么引入Watcher：抽象出一个能集中处理这些情况的类（通知用到数据的地方类型不同）
 */
let activeReactiveFn = null //保存当前需要收集依赖的函数 watcher


/**
 * 订阅者 Depend 类
 * 通过Depend类收集依赖、删除依赖和向依赖发送消息等,来存放 Watcher 观察者对象
 */
class Depend {
  constructor() {
    this.reactiveFns = new Set()  //防止同一更新函数使用多次属性导致被执行多次  <div>{{name}}-{{name}}</div>
  }
  // addDepend(reactiveFn) {
  //   this.reactiveFns.add(reactiveFn)
  // }
  depend() {
    if (activeReactiveFn) {
      this.reactiveFns.add(activeReactiveFn)
    }
  }
  notify() {   //派发更新通知所有watcher更新视图
    //遍历执行所有function
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}
//响应式函数

function watchFn(fn) {
  activeReactiveFn = fn
  fn()
  activeReactiveFn = null
}
//封装获取depend的函数
const targetMap = new WeakMap()
function getDepend(target, key) {
  let map = targetMap.get(target)
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  let depend = map.get(key)
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}
function reactive(obj) {
  return new Proxy(obj, {
    get: function (target, key, receiver) {
      const depend = getDepend(target, key)
      // depend.addDepend(activeReactiveFn)
      depend.depend()
      return Reflect.get(target, key, receiver)
    },
    set: function (target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    }
  })
}
function reactive_vue2(obj) {
  Object.keys(obj).forEach(key => {
    let value = obj[key]
    Object.defineProperty(obj, key, {
      get: function () {
        const depend = getDepend(obj, key)
        depend.depend()
        return value
      },
      set: function (newValue) {
        value = newValue
        const depend = getDepend(obj, key)
        depend.notify()
      }
    })
    return obj
  })
}
const obj = {
  name: 'why',  //一个属性对应一个dep对象
  age: 18
}
//监听对象属性变化
// const objProxy = reactive(obj)
const objProxy = reactive({
  name: 'why',
  age: 18
})
watchFn(function () {
  console.log('objProxy.name');
})
// watchFn(function () {
//   console.log(objProxy.age);
// })

objProxy.name = 'code'

//wacher
class Watcher {
  constructor(obj, key, cb) {
    // 将 Dep.target 指向自己，从而使得收集到了对应的 Watcher
    // 然后触发属性的 getter 添加监听
    // 最后将 Dep.target 置空
    Dep.target = this
    this.cb = cb
    this.obj = obj
    this.key = key
    this.value = obj[key]
    Dep.target = null
  }
  update() {
    // 获得新值
    this.value = this.obj[this.key]
    // 我们定义一个 cb 函数，这个函数用来模拟视图更新，调用它即代表更新视图
    this.cb(this.value)
  }
}





