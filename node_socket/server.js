/* Express の作成*/
const express = require("express");
const app = express();

/* httpサーバにSocket.io を登録*/
const http = require("http").createServer(app);

// Socket.io を準備
const io = require("socket.io")(http);

// publicフォルダのファイルにアクセスを許可
app.use(express.static(__dirname + "/public"));

/* クライアントからサーバ接続処理 (間違えるとつながらない)*/
io.on("connection", (socket) => {
    console.log("connection!")
        // ブラウザ開くと出る

    // クライアントからサーバに「client_to_server」で送信されたとき
    socket.on("client_to_server", (data) => {
        console.log(data);

        // 全てのクライアントへデータ送信
        io.emit("server_to_client", data);
    });
});

http.listen(3000);
console.log("http://localhost:3000");