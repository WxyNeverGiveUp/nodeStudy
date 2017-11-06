/*console.dir方法用于查看一个对象中的内容并且将该对象的信息输出到控制台中*/
var user = new Object();
user.name = "吴晓阳";
user.getName = function () {
    return this.name;
}
user.setName = function (name) {
    this.name = name;
}
console.dir(user);