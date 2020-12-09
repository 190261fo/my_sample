// コントローラーの作成
    // メソッド定義し、render() でindex.ejs、about.ejsを出⼒するように設定
exports.index = (req, res) => {
    res.render("index.ejs", { title: "Index Page"} )
};

exports.about = (req, res) => {
    res.render("about.ejs", { title: "About Page"} )
};
