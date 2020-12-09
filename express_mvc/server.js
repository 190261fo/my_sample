// モジュール読み込み
const express = require("express");
const ejs = require("ejs");
const config = require("config");

// カスタムモジュール読み込み (このプログラム階層内の相対パス)
const routes = require("./routes");
const router = require("./routes");
    // default.jsonはgitにアップしないので、自作モジュールは手元で管理する


// default.json から設定読み込み
const port = config.server.port;
const host = config.server.host;


// Expressを作成し、ミドルウェアで各設定を有効化
// Express作成
const app = express();

// EJS設定
app.set("ejs", ejs.renderFile);

// JSON
app.use(express.json());

// URLエンコード
app.use(express.urlencoded({ extended: true }));

// 静的ファイル有効
app.use(express.static(__dirname + "/public"));

// ミドルウェアルーティング
app.use(routes);


// ルーティング
router.get("/", (req, res) => {
    res.send("Hello Express Router!!");
});


// ポート：3000 ホスト：Localhost でサーバ待機
app.listen(port, host, () => {
    console.log(`app listen: http://${host}:${port}`);
});