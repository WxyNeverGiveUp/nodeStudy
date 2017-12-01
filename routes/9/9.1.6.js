/**
 *@fileName: 9.1.6.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: chdir方法与cwd方法使用示例
 */
console.log('当前目录：' + process.cwd());
process.chdir('../');
console.log('当前目录：' + process.cwd());