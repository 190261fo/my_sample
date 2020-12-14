// モジュール読み込み
const express = require("express");
const ejs = require("ejs");
const config = require("config");

// 今回の追加モジュール
const layouts = require("express-ejs-layouts");

// カスタムモジュール読み込み (このプログラム階層内の相対パス)
const routes = require("./routes");
// const router = require("./routes");
    // default.jsonはgitにアップしないので、自作モジュールは手元で管理する


// default.json から設定読み込み
const port = config.server.port;
const host = config.server.host;

console.log(port);
console.log(host);

// Expressを作成し、ミドルウェアで各設定を有効化
// Express作成
const app = express();

// EJS設定 有効にする(テンプレートエンジンを利用)
// app.set("ejs", ejs.renderFile);
// テンプレートエンジンをEJSにする
app.set("View engine", "ejs");
// views/layouts/layout.ejs を利用する
app.set("layouts", "layouts/layout");
// レイアウトを有効にする
app.use(layouts);

// JSON
app.use(express.json());

// URLエンコード
app.use(express.urlencoded({ extended: true }));

// 静的ファイル有効
app.use(express.static(__dirname + "/public"));

// ミドルウェアルーティング
app.use(routes);
// app.use("/", routes);


// ルーティング
// router.get("/", (req, res) => {
//     res.send("Hello Express Router!!");
// });


// ポート：3000 ホスト：Localhost でサーバ待機
app.listen(port, host, () => {
    console.log(`app listen: http://${host}:${port}`);
});