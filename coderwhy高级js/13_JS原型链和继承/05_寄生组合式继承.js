/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-11 14:40:04
 * @LastEditors: went
 * @LastEditTime: 2022-02-15 09:56:01
 */
function Person(name, age, friends) {
  this.name = name;
  this.age = age
  this.friends = friends
}
Person.prototype.eating = function () {
  console.log('eating');
}

function Student(name, age, friends, sno, score) {
  Person.call(this, name, age, friends)
  this.sno = sno
  this.score = score
}

Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student 

Student.prototype.studying = function () {
  console.log('studying');
}
var stu = new Student('why', 18, 'lx', 001, 100)
console.log('stu=====', stu);
//工具函数实现继承
function inheritPrototype(subType, superType) {
  Student.prototype = Object.create(superType.prototype)
  Object.defineProperty(subType.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: subType
  })
}

//intanceof :用于检测构造函数的prototype是否出现在实例对象的原型链上
