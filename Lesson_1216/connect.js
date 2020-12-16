/* mysql モジュール*/
const mysql = require("mysql")


/* データベース接続*/
// createConnection() - MySQLに接続を設定して作成
// mysql.createConnection(接続情報);

// 接続情報の利用 - 接続情報は「host」「user」「port」「password」「database」などを連想配列で設定
const con = mysql.createConnection({
host: 'ホスト名',
port: 'ポート',
user: 'ユーザ名',
password: 'パスワード',
});


// connect() - 接続情報を設定した MySQL に対して接続
// con.connect(コールバック関数);

// MySQL 接続 - コールバック関数には、エラーの引数を取得できる
con.connect((err) => {
    //エラーを検知
    if (err) throw err;
    console.log('database created!');
})

// end() - MySQL の処理を実⾏したら最後に終了！
    // 終了しておかないと Node.js の処理が完了しないので注意
con.end();