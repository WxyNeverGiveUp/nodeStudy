/**
 *@fileName: router.js
 *@author: 吴晓阳
 *@time: 2017/11/24
 *@description: 将Http请求转发给处理函数(requestHandlers.js)
 */
function route(pathname,query,handle,response) {
    console.log('route for:' + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](query,response);
    }
    else{
        console.log('No request handler found for ' + pathname);
        response.writeHead(404,{
            'Content-Type': 'text/plain'
        });
        response.write('404 Not Found');
        response.end();
    }
}
exports.route = route;