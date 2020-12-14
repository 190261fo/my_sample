// routesモジュールをエクスポート
    // routes.jsを読み込んで動作するよう、モジュールをエクスポートしておく。
    // また Router も利⽤できるようにしておく。
const express = require("express");

// HomeController モジュール読み込み
// 追記 (HomeController.js を実⾏するルーティング設定)
const homeController = require("./controllers/HomeController");

const router = express.Router();

// ルーティングの設定 (HomeController)
router.get("/", homeController.index);
router.get("/about", homeController.about);
router.get("/items", homeController.items);
// router.get("/routes", (req, res) => {
//     res.send("Hello routes!!")
// });

module.exports = router;

// // 追記 (UserController.js を実⾏するルーティング設定)
// const UserController = require("./controllers/UserController");