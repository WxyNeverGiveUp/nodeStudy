/**
 *@fileName: 12.4.3.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 使用completer属性实现Tab补全功能
 */
var readline = require('readline');
function completer(line) {
    var completions = 'helo error quit aaa bbb ccc'.split(' ');
    var hits = completions.filter(function (t) {
        return c.indexOf(line) == 0;
    });
    return [hits,line];
}
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    complete: completer
});
rl.on('line',function (line) {
    if (line == 'exit' || line == 'quit'|| line == 'q'){
        rl.close();
    }
    else{
        console.log('您输入了：'+line);
    }
});