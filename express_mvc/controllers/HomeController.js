// コントローラーの作成
    // メソッド定義し、render() でindex.ejs、about.ejsを出⼒するように設定
exports.index = (req, res) => {
    res.render("index.ejs", { title: "Index Page"} )
};

exports.about = (req, res) => {
    // 処理
    let data = {
        title: "About Page",
        message: "This is about page",
        name: "Tokyo Taro",
    }

    // HTMLの表示 & data を受け渡す
    // views/home/about.ejs
    // res.render("about.ejs", { title: "About Page"} )
    res.render("home/about.ejs", data)
};

exports.items = (req, res) => {
    let items = [
        { name: "Apple", price: 150 },
        { name: "Orange", price: 200 },
        { name: "Peach", price: 350 },
    ]

    // 処理
    let data = {
        items: items,
    }

    // HTMLの表示 & data を受け渡す
    res.render("home/items.ejs", data)
};