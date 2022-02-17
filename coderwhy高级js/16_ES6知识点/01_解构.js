/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-17 14:45:57
 * @LastEditors: went
 * @LastEditTime: 2022-02-17 14:48:00
 */
var arr = [1, 2, 3]
var [a, ...other] = arr

var obj = {
  name: 'shier',
  age: 19
}

var { name: newName = 'lx' } = obj   //设置重命名和默认值
console.log(newName);
