/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-02-18 13:43:44
 * @LastEditors: went
 * @LastEditTime: 2022-02-18 13:50:00
 */
function foo(m, n, x) {
  console.log('---------', m, n, x);//[ 'hello', 'world', '' ] why 18
}


const name = 'why'
const age = 18
foo`hello${name}world${age}`