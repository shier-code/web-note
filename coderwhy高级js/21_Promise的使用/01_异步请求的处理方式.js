/*
 * @Desc: 
 * @Version: v1.00
 * @Author: went
 * @Date: 2022-03-02 14:16:24
 * @LastEditors: went
 * @LastEditTime: 2022-03-02 14:51:40
 */
//弊端：对他人的函数不知道参数
function requestData(url, sucessCb, failCb) {
  setTimeout(() => {
    if (
      url = "shier"
    ) {
      sucessCb('sucess')
    } else {
      failCb('fail')
    }
  })
}
requestData('shier', (res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})


function requestData2(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "shier") {
        resolve('sucess')
      } else {
        reject('fail')
      }
    }, 100)
  })
}
requestData2('gdz').then(res => {
  console.log(res);
}, (err) => {
  console.log(err + '======');
}).catch(err => {
  console.log(err);
})