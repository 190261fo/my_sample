// UPDATE
    // emailの変更

// DBのconnect処理をモジュールにして読み込む
const db = require("./lib/db");

// db: connect()
const con = db.connect();

// usersからidで検索 - @test.comに更新される
let params = [
    { "email": "tanaka@test.com" }, { "email": "tanaka@example.com" }
];

let sql = "UPDATE users SET ? WHERE ?;";
con.query(sql, params, (err, results) => {
    if (err) throw err;
    console.log("update success!");
});

// DB接続終了
con.end();