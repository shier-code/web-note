/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-21 15:31:31
 * @LastEditors: went
 * @LastEditTime: 2022-02-21 15:53:28
 */
const obj = {
  name: 'shier',
  age: 19
}
console.log(Object.values(obj));
//字符串填充

const msg = 'hello world'
const newmsg = msg.padStart(15, '*').padEnd(20, '-')
console.log(newmsg);

