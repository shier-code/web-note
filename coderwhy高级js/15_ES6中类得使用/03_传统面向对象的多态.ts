/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-17 14:14:18
 * @LastEditors: went
 * @LastEditTime: 2022-02-17 14:23:13
 */
class Shape {
  getArea() {}
}
class Rectangle extends Shape {
  getArea() {
    return 100;
  }
}
class Circle extends Shape {
  getArea() {
    return 200;
  }
}
var r = new Rectangle();
var c = new Circle();

//多态：对不同的数据类型执行同一操作时，表现出来的行为不一样
//1、必须有继承 2：必须有重写 3、必须有父类引用指向子类对象
function calcArea(shape: Shape) {
  console.log(shape.getArea);
}
