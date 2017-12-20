/**
 *@fileName: 14.5.1.js
 *@author: 吴晓阳
 *@time: 2017/12/19
 *@description: server 的文件
 */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');
var routes = require('./routes');
var app = express();
app.set('views', 'D:/wxyTest/nodeStudy/views');
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// 新页面
app.get('/list',routes.test);
app.get('/form',routes.form);
app.post('/form',routes.create);
app.listen(1337,'localhost');
