/*从模块外部访问模块内的成员*/
/*使用exports对象*/
var myMsg = "hello";
var funcname = function () {
  return "i'm funcname1 function";
};
exports.msg = myMsg;
exports.funcname = funcname;