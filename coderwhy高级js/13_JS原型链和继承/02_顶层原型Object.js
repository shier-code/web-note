/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-08 11:09:12
 * @LastEditors: went
 * @LastEditTime: 2022-02-10 10:35:46
 */
var obj = {
  name: 'shier',
  age: 19
}
obj.prototype = {
  address: '成都市'
}
Object.defineProperty(obj, 'height', {
  value: '18.8'
})
console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.constructor);
console.log(Object.prototype.__proto__);  //原型链终点null

console.log(Object.getOwnPropertyDescriptors(obj)); //打印对象虽有的属性修饰符，不管是不是可枚举属性

console.log('-------', Object.getOwnPropertyNames(obj));//获取自生所有
console.log('-------', obj);

