// routesモジュールをエクスポート
    // routes.jsを読み込んで動作するよう、モジュールをエクスポートしておく。
    // また Router も利⽤できるようにしておく。
const express = require("express");

// HomeController モジュール読み込み
// 追記 (HomeController.js を実⾏するルーティング設定)
const HomeController = require("./controllers/HomeController");

const router = express.Router();

// ルーティングの設定 (HomeController)
router.get("/", HomeController.index);
router.get("/about", HomeController.about);
router.get("/items", HomeController.items);
// router.get("/routes", (req, res) => {
//     res.send("Hello routes!!")
// });

module.exports = router;

// // 追記 (UserController.js を実⾏するルーティング設定)
// const UserController = require("./controllers/UserController");