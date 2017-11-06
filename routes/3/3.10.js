/*setTimeout函数与clearTimeout函数 延时执行*/
function saySomething(msg) {
    console.log(msg);
}
var timer = setTimeout(saySomething,2000,'haha');
/*使用clearTimeout函数取消testFunction函数的调用，参数值为setTimeout函数所返回的的定时器对象*/
// clearTimeout(timer); // 使用完后清除