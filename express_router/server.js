// モジュール読み込み
// const express = require("express");
var express = require("express");
    //var 一番ゆるい定義, const ほぼ定数で再定義できない

// Router作成
const router = express.Router();

// サーバ作成
// const app = express();
var app = express();

// ミドルウェア router
app.use("/", router);

// ルーティング
router.get("/", (req, res) => {
    // res.send("Hello Express Router!!");
    res.send("Route index!!!");
});

router.get("/profile", (req, res) => {
    res.send("Tokyo Taro");
});

router.get("/calculate", (req, res) => {
    var tax_rate = 0.1;
    var price = req.query.price;
    var tax = price * tax_rate;
    res.send(String("消費税は…" + tax));
});

// router.get("/message/list", (req, res) => {
//     res.send("Message list page");
// });

// サーバ待機
app.listen(3000);

console.log("Listen: http://localhost:3000");