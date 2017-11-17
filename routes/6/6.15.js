/*在open方法内可以使用futimes*/
var fs = require('fs');
fs.open('./mess.txt','w',function(err,fd) {
    fs.futimes(fd,new Date(),new Date(),function (err) {
       if(err){
           console.log('修改失败');
       }
       else{
           console.log('修改成功');
       }
    });
});