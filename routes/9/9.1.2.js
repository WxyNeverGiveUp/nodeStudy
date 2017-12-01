/**
 *@fileName: 9.1.2.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 遍历process.argv属性值数组
 */
process.argv.forEach(function (val,index,array) {
    console.log(index + ":" + val);
});