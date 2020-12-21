// DELETE - users から指定したカラムのレコードを削除。SQL の WHERE 句はカラム名と「?」を利⽤して記述
    // emailを指定して削除

// DBのconnect処理をモジュールにして読み込む
const db = require("./lib/db");

// db: connect()
const con = db.connect();

const email = "itoh@example.com";
let sql = "DELETE FROM users WHERE email = ?;";

con.query(sql, email, (err, results) => {
    if (err) throw err;
    console.log("delete success.");
});

// DB接続終了
con.end();