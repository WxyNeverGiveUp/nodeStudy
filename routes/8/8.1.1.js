/**
 *@fileName: 8.1.1.js
 *@author: 吴晓阳
 *@time: 2017/11/26
 *@description: 基于cheerio的爬取学校机构的爬虫
 */
var cheerio=require("cheerio");
var http=require("http");
var fs=require("fs");

var options="http://www.nenu.edu.cn/jgsz/list.htm";
var htmlData="";
var req=http.request(options,function(res){
    res.on("data",function(chunk){
        htmlData+=chunk;
    });
    res.on("end",function(){
        var $=cheerio.load(htmlData);
        var textcontent=$("#org tr").text();
        fs.writeFile("./school.txt",textcontent,"utf-8");
        console.log('爬完了！');
    });
});
req.end();
