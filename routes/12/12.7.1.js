/**
 *@fileName: 12.7.1.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: 自定义运行REPL运行环境 修改REOL运行环境中的命令提示符
 */
var repl = require('repl');
repl.start({
   prompt: '这是我自定义的REPL环境命令提示符：'
});