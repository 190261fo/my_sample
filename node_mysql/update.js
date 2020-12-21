// UPDATE
    // emailの変更

// DBのconnect処理をモジュールにして読み込む
const db = require("./lib/db");

// db: connect() - DB接続 (カスタムモジュールを利用)
const con = db.connect();

// usersからidで検索 - @test.comに更新される
                    //id=1 のものが@yokohama.comに更新
let sql = "UPDATE users SET ? WHERE ?;";
let params = [
    // { "email": "tanaka@test.com" },
    // { "email": "tanaka@example.com" },
    { "email": "tanaka@yokohama.com" },
    { "id": 1 },
];
// UPDATE users SET email="XXXX" WHERE id="XX";

con.query(sql, params, (err, results) => {
    // if (err) throw err;
    console.log("update success!");
    console.log(sql);
    console.log(results);
});

// DB接続終了
con.end();