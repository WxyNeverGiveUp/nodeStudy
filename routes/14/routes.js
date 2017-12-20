var items = [{title:'文章1'},{title:'文章2'}];
exports.test = function (req,res) {
    res.render('test',{title:'文章列表',items:items});
};
// 发表新文章
exports.form = function (req,res) {
    res.render('form',{title:'发表新文章'});
};
// 创建
exports.create = function (req,res) {
    console.log(req.body);
    var text = req.body.text;
    // res.send(text);
    res.render('detail',{
        title:'新文章详情',
        text:text
    });
};