/**
 *@fileName: middleware.js
 *@author: 吴晓阳
 *@time: 2017/12/18
 *@description: 使用中间件 自定义中间件函数的代码示例
 */
var setHeader = function () {
    return function (req,res,next) {
        res.statusCode = 200;
        res.header = {
            'Content-Type':'text/html'
        };
        res.head = '<head><meta charset="utf-8"></head>';
        next();
    }
};
exports.setHeader = setHeader;
