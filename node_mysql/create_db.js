// モジュール読み込み
const mysql = require("mysql");
const config = require("config");

// 接続情報設定 - まだDBないためdatabaseの設定は不要
const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
});

// DB接続 - connect()で
con.connect((err) => {
    if (err) throw err;
    console.log("connect success!!");
});

// CREATE DATABASE実行 - DB作成するSQL文「CREATE DATABASE」を
// CREATE DATABASE データベース名;
// 今回は config/default.jsonに設定したmysql.databaseを利用
const sql = "CREATE DATABASE " + config.mysql.database;
console.log(sql);
// query() でSQL実行
con.query(sql, (err) => {
    if (err) throw err;
    console.log("created database!")
});

// DB接続完了
con.end();