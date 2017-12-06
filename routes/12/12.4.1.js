/**
 *@fileName: 12.4.1.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: process的循环输入
 */
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
if(typeof chunk === 'string'){
    chunk = chunk.slice(0,-2);
    process.stdout.write('stringLength:'+ chunk.length +'\n');
}
if(chunk === ''){
    process.stdin.emit('end'); // 触发end事件
    return
}
if (chunk !== null) {
    process.stdout.write('data: '+ chunk +'\n');
}
});

process.stdin.on('end', function() {
    process.stdout.write('end');
});
