/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-08 16:55:34
 * @LastEditors: went
 * @LastEditTime: 2022-03-08 17:00:32
 */
const names = ['shier', 'lx', 'tom']

let index = 0

const namesIterator = {
  next: function () {
    if (index < names.length) {
      return { done: false, value: names[index++] }
    } else {
      return { done: true, value: undefined }
    }
  }
}
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
