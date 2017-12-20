/**
 *@fileName: 14.4.5.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: bodyParser中间件
 */
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));
app.get('/index',function (req,res) {
    res.sendFile(__dirname+'/14.3.5.html');
});
app.post('/index/file',function (req,res) {
    console.log(req);
    console.log(req.body.firstname);
    console.log(req.body.username);

    // var file = req.files.myfile;
    // fs.readFile(file.path,function (err,data) {
    //     if(err){
    //         res.send('读文件失败！');
    //     }
    //     else{
    //         fs.writeFile(file.name,data,function (err) {
    //             if(err){
    //                 res.send('写入文件失败');
    //             }
    //             else{
    //                 res.send('文件上传成功');
    //             }
    //         });
    //     }
    // });
});
app.listen(1337,'127.0.0.1');