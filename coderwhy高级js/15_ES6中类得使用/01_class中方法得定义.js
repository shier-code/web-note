/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-16 15:57:00
 * @LastEditors: went
 * @LastEditTime: 2022-02-16 16:29:29
 */
class Person {
  constructor(name, age) {       //es6中的类单独声明构造函数
    this.name = name
    this.age = age  //this指向新得实例对象
    this._address = "成都市"
  }
  //相当于放到Persian的原型上
  eating() {
    console.log('---', this.eating);
  }
  //类的访问器方法
  get address() {
    return this._address
  }
  set address(newAddr) {
    this._address = newAddr
  }
  //静态方法:通过类名访问，而不是通过实例对象访问

  static randomPerson() {
    var name = ['tom', 'jerry']
    var nameIndex = Math.floor(Math.random() * name.length)
    var name = name[nameIndex]
    var age = Math.floor(Math.random() * 100)
    return new Person(name, age)
  }
}
console.log(Person.randomPerson())