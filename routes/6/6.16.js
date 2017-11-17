/*修改文件或目录的读写权限*/
var fs = require('fs');
// 0600 代表所有者可读，其他人没任何权限
fs.chmod('./test1.txt',0600,function (err) {
    if(err){
        console.log('修改文件权限失败');
    }
    else{
        console.log('修改test1文件权限操作成功');
    }
});
// 0644代表所有者可读，其他者只读
fs.chmod('./test2.txt',0644,function (err) {
    if(err){
        console.log('修改文件权限失败');
    }
    else{
        console.log('修改test2文件权限操作成功');
    }
});
// 0755代表素有这有有所权限，其他所有人可读和执行
fs.chmod('./test3.txt',0755,function (err) {
    if(err){
        console.log('修改文件权限失败');
    }
    else{
        console.log('修改test3文件权限操作成功');
    }
});
// 0740代表所有者有所有权限，所有者的所在组只读
fs.chmod('./test4.txt',0740,function (err) {
    if(err){
        console.log('修改文件权限失败');
    }
    else{
        console.log('修改test4文件权限操作成功');
    }
});