/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-09 15:23:58
 * @LastEditors: went
 * @LastEditTime: 2022-02-09 16:23:52
 */
function Person(name, age) {
  this.name = name;
  this.age = age
  this.array = []
}
Person.prototype.eating = function () {
}

function Student(name, age) {
  Person.call(this, name, age)
  this.sno = 111
}
var p = new Person()
Student.prototype = p
// Student.prototype = new Person()   //Student.prototype改变指向，指向p,之前的指向空间销毁，
//因此要在继承后定义子类的方法，否则访问不到studying
Student.prototype.studying = function () {
  console.log(this.name);
}
var stu = new Student()
var stu2 = new Student()
stu.array.push('1')
console.log(stu2.array); //['1']

//原型链弊端
//1、继承的父类属性看不到
//2、继承自父类的引用属性是指向同一个，会相互影响  stu.array=['1'] 直接赋值不会相互影响
//3、无法传递参数  new Student('sheir')  父类接收不到   

//借用构造函数继承弊端
//1、方法都在构造函数中定义，每次创建实例都会创建一遍方法（父类被多次调用）