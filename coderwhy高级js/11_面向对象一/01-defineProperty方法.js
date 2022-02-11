/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-07 15:13:35
 * @LastEditors: went
 * @LastEditTime: 2022-02-07 15:52:01
 */
var obj = {
  name: 'why',
  age: 12,
  _address: '北京市'
}
//该方式添加的属性是不可枚举属性，打印对象时看不到，obj.height访问
Object.defineProperty(obj, 'address', {

  configurable: true,    //属性是否可配置，不可删除，不可修改，不可重新定义属性描述符
  enumerable: false,  //是否可枚举 for in /Object.keys拿不到该属性，默认false
  writable: true,  //是否可写，赋值
  value: '成都市'
})

//存取属性描述符
//1、隐藏某个私有属性，不被外界使用和赋值
//2、在截获某个属性的访问和设置过程
Object.defineProperty(obj, 'address', {
  configurable: true,
  enumerable: false,
  get: function () {
    console.log('截获访问值');
    // return this._address
    return '北海市'
  },
  set: function (val) {
    console.log('截获设置值');
    this._address = val
  }
})
console.log(obj.address);
obj.address = '上海市'


