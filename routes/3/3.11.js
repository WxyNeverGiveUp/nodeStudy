/*setInterval函数与clearInterval函数*/
var testFunction = function (msg) {
    console.log(msg);
};
var clear = function (pram) {
    clearInterval(pram);
    console.log('结束执行');
};
var timer = setInterval(testFunction,2000,"每隔2S执行一次哦！");
var timer2 = setTimeout(clear,7000,timer);