// MySQL の INSERT⽂ は SET句 を利⽤すると便利
// INSERT INTO users SET (カラム名 = 値, カラム名 = 値, ・・・);

// 1件のデータをINSERTする - SQLは「?」で記述し、データをテーブルカラムの連想配列で query() の第2引数に設定
// データ
const password = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";
let post = {
    first_name: "田中",
    last_name: "一郎",
    email: "tanaka@example.com",
    password: password,
};

// SQL文を「？」つきで記述
let sql = "INSERT INTO users SET ?;";

// SQL実行
con.query(sql, post, (err, result, fields) => {
    if (err) console.log(err.sqlMessage);
});


// 複数データを繰り返しINSERTする - 複数データを forEach() で繰り返し INSERT する場合
const password2 = "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi";
let ports = [
    { first_name: "田中", last_name: "一郎", email: "tanaka@example.com", password: password2, },
    { first_name: "佐藤", last_name: "二郎", email: "satoh@example.com", password: password2, },
    { first_name: "鈴木", last_name: "三郎", email: "suzuki@example.com", password: password2, },
    { first_name: "小林", last_name: "四郎", email: "kobayashi@example.com", password: password2, },
    { first_name: "伊藤", last_name: "五郎", email: "itoh@example.com", password: password2, },
];

let sql2 = "INSERT INTO users SET ?;";
ports.forEach((port) => {
    con.query(sql2, port, (errs, results, fields) => {
        if (errs) console.log(errs.sqlMessage);
    })
});