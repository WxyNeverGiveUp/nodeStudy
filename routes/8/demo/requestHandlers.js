/**
 *@fileName: requestHandlers.js
 *@author: 吴晓阳
 *@time: 2017/11/24
 *@description: 处理http请求
 */
var querystring = require('querystring');
var fs = require('fs');

function getText(response) {
    var text = 'hello world2';
    console.log(text);
    response.writeHead(200,{
        'Content-Type': 'text/plain'
    });
    response.write(text);
    response.end();
}

function getImage(response) {
    console.log('getImage');
    fs.readFile('./images/ceshi9.jpg','binary',function (error,file) {
       if (error){
           response.writeHead(500,{
               'Content-Type': 'text/plain'
           });
           response.write(error + '\n');
           response.end();
       }
       else{
           response.writeHead(200,{'Content-Type':'image/jpg'});
           response.write(file,'binary');
           response.end();
       }
    });
}

function getBigImage(response) {
    console.log('getBigImage');
    fs.readFile('./images/ceshi14.jpg','binary',function (error,file) {
       if(error){
           response.writeHead(500,{
               'Content-Type': 'text/plain'
           });
           response.write(error + '\n');
           response.end();
       }
       else{
           response.writeHead(200,{
               'Content-Type':'Image/jpg'
           });
           response.write(file,'binary');
           response.end();
       }
    });
}
function getJson(response) {
    console.log('getJson');
    fs.readFile('./json/test.json','utf8',function (error,file) {
       if (error){
           response.writeHead(500,{
              'Content-Type':'text/html'
           });
           response.write(error + '\n');
           response.end();
       }
       else{
           response.writeHead(200,{
              'Content-Type': 'text/plain'
           });
           response.write(file,'utf8');
           response.end();
       }
    });
}
function get(query,response) {
    console.log('query:' + query);
    var queryObj = querystring.parse(query);
    for(key in queryObj){
        console.log('key:' + key + ', value:' + queryObj[key]);
    }
    var type = queryObj['type'];
    switch (type) {
        case 'text':
            getText(response);
        break;
        case 'image':
            getImage(response);
        break;
        case 'bigimage':
            getBigImage(response);
        break;
        case 'json':
            getJson(response);
        break;
        default:
            var text = 'type' + type + 'is unkown';
            console.log(text);
            response.write(200,{
               'Content-Type': 'text/plain'
            });
            response.write(text);
            response.end();
        break;
    }
}

function hello(query, response) {
    console.log("Hello World");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

exports.get = get;
exports.hello = hello;