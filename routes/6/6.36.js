/*使用readStream对象的pipe方法 管道执行复制*/
var fs = require('fs');
var file = fs.createReadStream('./message.txt');
var out= fs.createWriteStream('./anotherMessage.txt'); // 默认option值为true表示可以继续写
file.pipe(out,{end:false}); // 复制操作,并设置为false，表示不关闭文件
file.on('end',function () {
   out.end('再见'); // 可以继续写入
   console.log('触发了end事件');
});