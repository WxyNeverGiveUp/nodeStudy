/**
 *@fileName: test1.js
 *@author: 吴晓阳
 *@time: 2017/12/2
 *@description: test1.js文件中的示例代码
 */
process.stdout.write('子进程当前工作目录为：'+process.cwd());
process.argv.forEach(function (val,index,array){
    process.stdout.write('\r\n' + index + ':' + val);
});