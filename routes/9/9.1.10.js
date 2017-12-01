/**
 *@fileName: 9.1.10.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: uncaughtException事件
 */
process.on('uncaughtException',function (err) {
    console.log('捕捉到一个未被处理的错误：' + err);
});
asd(); // => asd is not defined