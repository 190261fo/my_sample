/* expressの読み込み*/
const express = require("express");

/* サーバ作成*/
const app = express();

/* JSON対応*/
app.use(express.json());
/* URLエンコードされたデータを解析する*/
app.use(express.urlencoded({ extended: true }));

/* クロスドメインの許可 XSS*/
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    // CROS設定：全てのドメインに対して許可
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    // 次の処理
    next();
});

// 静的コンテンツ (publicフォルダ内のコンテンツに直接アクセスできるようになる？)
app.use(express.static(__dirname + "/public"));

app.post("/", (req, res) => {
    let m = req.body.message;
    let result = {
        // message: "Hello",
        // message: req.body.message, //←でもいい
        message: m,
        datetime: new Date(),
    };

    // レスポンス
    res.send(result);
});

app.post("/purchase", (req, res) => {
    const tax_rate = 0.1;
    const price = req.body.price;
    const amount = req.body.amount;

    const tax = price * amount * tax_rate;
    const excluding_price = price * amount;
    const total_prite = excluding_price + tax;

    let result = {
        excluding_price: excluding_price,
        total_prite: total_prite,
        tax: tax,
    };

    // レスポンス
    res.send(result);
});

/* ルーティング*/
// Webルートにリクエストされたらレスポンス
app.get("/", (req, res) => {
    res.send("Hello Express!!!");
});
// ↑ つまりは、app.get("URLパス", 処理);


/* 無名関数の書き方*/
// app.get("/", function(req, res) {
//     // 処理
// });

app.listen(3000);

console.log("Server listen: http://localhost:3000");