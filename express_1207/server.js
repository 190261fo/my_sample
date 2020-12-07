/* expressの読み込み*/
const express = require("express");

/* サーバ作成*/
const app = express();

/* ルーティング*/
// Webルートにリクエストされたらレスポンス
app.get("/", (req, res) => {
    res.send("Hello Express!");
});
// ↑ つまりは、app.get("URLパス", 処理);


/* 無名関数の書き方*/
// app.get("/", function(req, res) {
//     // 処理
// });

app.listen(3000);