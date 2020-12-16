// テーブル作成 - 作成したdb.jsを利用して、SQLファイルをインポート

// DBのconnect処理をモジュールにして読み込む
const db = require("./lib/db");

// 外部SQLファイルの設定
let files = [
    './sql/01_create_table_users.sql',
];

// 外部SQLファイルの実行
files.forEach((file) => {
    db.importSQL(file);
});
