/*
 * @Desc:
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-21 14:34:16
 * @LastEditors: went
 * @LastEditTime: 2022-02-21 15:12:50
 */
//对象的key只能是字符串
//map允许其他类型作为key

const obj1 = {
  name: 'shier'
}
const obj2 = {
  name: 'lx'
}

const map = new Map()
map.set(obj1, '111')
map.set(obj2, '222')

console.log(map);

const map2 = new Map([[obj1, 'aaa'], [obj2, 'bbb'], [2, 'ccc']])

console.log(map2.get(2));
console.log(map2.has(2));
map2.forEach(i => {
  console.log(i);
})
