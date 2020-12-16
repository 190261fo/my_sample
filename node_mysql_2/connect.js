// MySQL モジュール読み込み
const mysql = require("mysql");

// MySQL 設定&作成
const con = mysql.createConnection({
    host: "localhost",
    port: "3306", //xampp のport番号
    user: "root",
    password: "",
});

// DB接続
con.connect((err) => {
    if (err) throw err;
    console.log("connect success!");
});

// DB接続終了 ※重要！！
con.end();