/*定时器对象的unref方法与ref方法*/
var testFunction = function () {
    console.log('callback function executed');
}
var timer = setInterval(testFunction,3000);
// timer.unref();