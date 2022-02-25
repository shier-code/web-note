/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-21 13:49:06
 * @LastEditors: went
 * @LastEditTime: 2022-02-21 14:33:04
 */
const set = new Set()
set.add(123)
set.add(4)
set.add(5)
//添加对象
set.add({})
set.add({})

//数组去重

const arr = [1, 2, 2, 3]
const newArr = [...new Set(arr)]

console.log(set.size); //长度
set.delete(123)
set.has(123)
set.forEach(item => {
  console.log(item);
})
//weakSet

//1、只能存放对象类型，不能芳基本数据类型 2、对对象是弱引用
//弱引用，GC(垃圾回收)不会根据该引用决定是否回收内存的空间,不能遍历
const weakset = new weakSet()
let obj = {
  name: 'shier'
}
weakset.add(obj)