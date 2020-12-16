// users テーブルにデータを挿⼊。DB接続は、前回作成した db.js を利⽤

// DBのconnect処理をモジュールにして読み込む
const db = require("./lib/db");

// db: connect()
const con = db.connect();

// password
const password = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";

let ports = [
    { last_name: '田中', first_name: '一郎', email: 'tanaka@example.com', password: password, },
    { last_name: '佐藤', first_name: '二郎', email: 'satoh@example.com', password: password, },
    { last_name: '鈴木', first_name: '三郎', email: 'suzuki@example.com', password: password, },
    { last_name: '小林', first_name: '四郎', email: 'kobayashi@example.com', password: password, },
    { last_name: '伊藤', first_name: '五朗', email: 'itoh@example.com', password: password, },
];

let sql = "INSERT INTO users SET ?;";
ports.forEach((port) => {
    con.query(sql, port, (err, results) => {
        if (err) console.log(err.sqlMessage);
    })
});

// DB接続終了
con.end();