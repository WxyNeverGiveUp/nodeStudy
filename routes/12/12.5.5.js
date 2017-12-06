/**
 *@fileName: 12.5.5.js
 *@author: 吴晓阳
 *@time: 2017/12/6
 *@description: inherits方法
 */
var util = require('util');
function Vehicle() {}
Vehicle.prototype = {
    accerelate:function () {
        console.log('accerelate');
    }
};
function Bike() {

}
util.inherits(Bike,Vehicle);
var bike = new Bike();
bike.accerelate(); // bike继承了Vehicle的accerelate属性

