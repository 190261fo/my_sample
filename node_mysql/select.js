// SELECT

// DBのconnect処理をカスタムモジュールにして読み込む
const db = require("./lib/db");

// db: connect() - カスタムモジュールを利用
const con = db.connect();

// // users から3件取得
// let sql = "SELECT * FROM users LIMIT ? OFFSET ?;";
// const limit = 3;
// const offset = 0;
// let params = [limit, offset];

// con.query(sql, params, (error, results, fields) => {
//     results.forEach((user, index) => {
//         console.log(`${user.id} : ${user.email}`);
//     })
// })


// // users からid で検索
// params = { "id": 5 }; // 存在しない
// sql = "SELECT * FROM users WHERE ?;";
// con.query(sql, params, (error, results, fields) => {
//     if (results[0]) {
//         let user = results[0];
//         console.log(`${user.id} : ${user.first_name} : ${user.email}`);
//     } else {
//         console.log("Not found user.");
//     }
// });


// users全てからemailをコンソール表示
let sql = "SELECT * FROM users;";
con.query(sql, (err, results) => {
    console.log(sql);
    results.forEach((user) => {
        console.log(user.email);
    });
});


// users からid で検索
const user_id = 1; // 存在しない
sql = "SELECT * FROM users WHERE id = " + user_id + ";";
con.query(sql, (err, results) => {
    console.log(sql);
    let user = results[0];
    if (user) console.log(user.email);
});

// DB接続終了
con.end();