// Express のサーバ
/*
let express = require("express");
let app = express();
app.get("/", function (req, res) {
    console.log("Hello");
}) 
app.listen(3000);
*/


// サーバ作成
// const server = express(); 


// サーバ待機 - listen()で待機。デフォルト設定は、ポート「3000」、ホスト「: localhost」
/**
 * app.listen(ポート, ホスト, () => {
 *     処理;
 * };
*/


// ルーティング
// GETリクエスト処理
// app.get(パス, コールバック関数);

// POSTリクエスト処理
// app.post(パス, コールバック関数);

// すべてのリクエスト処理
// app.all(パス, コールバック関数);

// リクエストメソッドのコールバック関数
/**
 * (Request オブジェクト, Response, オブジェクト) => {
 *     処理;
 * }
例えばGETリクエストの処理では…
 * const server = express();
 * app.get((req, res) => {
 *     処理;
 * });
*/


// ルーティングの例
// 「/」のGETリクエスト処理 - 開発環境：http://localhost:3000/
/**
 * const server = express();
 * app.get("/", (req, res) => {
 *     処理記述;
 * });
*/

// 「/profile」のGETリクエスト処理 - 開発環境：http://localhost:3000/profile
/**
 * const server = express();
 * app.get("/profile", (req, res) => {
 *     処理記述;
 * });
*/


// Request オブジェクト
// url - リクエストされたURLを取得
// req.url

// query - GET送信されたデータを取得
// req.query

// body - post送信されたデータを取得
// req.body
