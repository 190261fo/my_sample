// routesモジュールをエクスポート
    // routes.jsを読み込んで動作するよう、モジュールをエクスポートしておく。
    // また Router も利⽤できるようにしておく。

const express = require("express");
const router = express.Router();

// 追記 (HomeController.js を実⾏するルーティング設定)
const HomeController = require("./controllers/HomeController");

// 追記 (UserController.js を実⾏するルーティング設定)
const UserController = require("./controllers/UserController");


// router.get("/routes", (req, res) => {
//     res.send("Hello routes!!")
// });
router.get("/", HomeController.index);
router.get("/about", HomeController.about);


module.exports = router;