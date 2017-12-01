/**
 *@fileName: 9.1.5.js
 *@author: 吴晓阳
 *@time: 2017/12/1
 *@description: 使用nextTick方法指定两个耗时的操作同步进行
 */
var fs = require('fs');
function foo() {
    function beginAnotherTask() {
        var file = fs.createReadStream('./9.1.4.js');
        file.on('data',function (data) {
           console.log('读取到了%d字节',data.length);
        });
    }
    process.nextTick(beginAnotherTask);
}
var file = fs.createReadStream('./9.1.4.js');
file.on('data',function (data) {
    console.log('读取到了%d字节',data.length);
});
foo();