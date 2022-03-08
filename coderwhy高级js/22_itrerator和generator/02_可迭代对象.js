/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-08 16:55:34
 * @LastEditors: went
 * @LastEditTime: 2022-03-08 17:21:34
 */
const iterableObj = {
  names: ['shier', 'lx', 'tom'],
  [Symbol.iterator]: function () {
    let index = 0
    return {
      next: () => {
        if (index < this.names.length) {
          return { done: false, value: this.names[index++] }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}

//for of可以看成iterableObj[Symbol.iterator]().next().value
console.log(iterableObj[Symbol.iterator]().next().value);
