/**
 *@fileName: 9.3.3.js
 *@author: 吴晓阳
 *@time: 2017/12/3
 *@description: setupMaster方法，修改子进程中的node.js的默认行为，指定子进程中的运行文件
 */
var cluster = require('cluster');
cluster.setupMaster({
   exec: '9.3.4.js'
});
cluster.fork();
console.log('这段代码被运行在主进程中');
console.log('cluster.settings属性值：%j',cluster.settings);
