// モジュール変数 = require(ファイルパス);
const itemsModule = require("./items");
    // 「./」->同階層 の「items」というファイルを読み込む

console.log(itemsModule.items);
    // items.js 内の itemsという変数の中身をログ出力

const controlModule = require("./control");
controlModule.show(itemsModule.items);
    // モジュールの実行

// node コマンドで実行
    // ↓ ターミナルで node main.js 打ったらEnter