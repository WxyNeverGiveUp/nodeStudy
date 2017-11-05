var repl = require('repl');
var con = repl.start().context;
con.msg = '提示信息';
con.testFunction = function () {
    console.log(con.msg);
};