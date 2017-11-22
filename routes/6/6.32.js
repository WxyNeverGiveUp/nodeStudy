/*drain事件，在writeStream对象的write方法返回false时触发*/
var fs= require('fs');
var out = fs.createWriteStream('./testDrain.txt');
for (var i=1;i<=10000;i++){
    var flag = out.write(i.toString());
    console.log(flag);
}
out.on('drain',function () {
    console.log('操作系统缓存区中的数据已全部输出了。');
});
var out = fs.createWriteStream('./testDrain2.txt');
for (var i=1;i<=10;i++){
    var flag = out.write(i.toString());
    console.log(flag);
}
out.on('drain',function () {
   console.log('操作系统缓存区中读数据已经全部输出');
});