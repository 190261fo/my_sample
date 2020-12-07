// モジュール読み込み
const express = require("express");
const config = require("config");

// 設定ファイルから、変数hostとportに設定
const port = config.server.port;
const host = config.server.host;

// Expressサーバ作成
const app = express();

// リクエスト処理 - GETリクエストでWebルート「/」にアクセスした時の処理
app.get("/", (req, res) => {
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);

    res.send("Hello Express!");
});

// ※教材外 /login にPOSTリクエスト
// リクエスト処理 - GETリクエストでWebルート「/」にアクセスした時の処理
app.post("/login", (req, res) => {
    // req.body に、form でPOST送信されたデータが入っている
    const login_name = req.body.login_name;
    const password = req.body.password;

    console.log(login_name);
    console.log(password);

    let message = "login_error";
    if (login_name == "test" && password == "1234") {
        message = "login success!!";
    }

    // レスポンスを返す
    res.send(message);
});

// サーバの待機
app.listen(port, host, () => {
    console.log(`Server listen: ${host}:${port}`);
});

// Expressサーバ起動確認
    // ターミナルで node app.js
    // ブラウザで http://localhost:3000/ にアクセス

// Expressサーバ停止
    // サーバ起動中のターミナルで Ctrl + C
