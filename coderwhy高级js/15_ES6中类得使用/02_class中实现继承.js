/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-16 16:34:38
 * @LastEditors: went
 * @LastEditTime: 2022-02-16 17:25:37
 */
class Person {
  constructor(name, age) {    //es6中的类单独声明构造函数
    this.name = name
    this.age = age  //this指向新得实例对象
  }
  personMethod() {
    console.log('do sth 1');
  }
}

class Student extends Person {
  //在子类狗赞函数使用this或返回对象之前，必须通过super调用父类构造函数
  constructor(name, age, sno) {
    super(name, age)
    this.sno = sno
  }
  personMethod() {
    super.personMethod()  //复用父类方法的逻辑 
    console.log('do sth 2');
  }
}

var stu = new Student('shier', 19, 111)
console.log(stu);
