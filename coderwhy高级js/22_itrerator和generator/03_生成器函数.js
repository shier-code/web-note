/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-09 17:10:53
 * @LastEditors: went
 * @LastEditTime: 2022-03-10 16:59:27
 */
function* foo() {

  let a = 1;
  console.log(a);
  // return '2222'   //return可理解为特殊的yield
  const n = yield a   //接受下一次调用next的参数

  let b = 2 * n
  console.log(b);
  yield

  let c = 3
  console.log(c);
}
const generator = foo()
console.log('  generator.next()===', generator.next());
generator.next(10)

