/* Express の作成*/
const express = require("express");
const app = express();

/* httpサーバにSocket.io を登録*/
const http = require("http").createServer(app);

// Socket.io を準備
const io = require("socket.io")(http);

/* クライアントからサーバ接続処理 (間違えるとつながらない)*/
io.on("connection", (socket) => {
    console.log("connection!")
});

/* サーバ受信処理*/
// socket.on(イベント名, (data) => {
//     // 処理
// });

/* emit() でクライアント送信処理*/
socket.on("client_to_server", (data) => {
    // 全てのクライアントに送信
    io.emit("server_to_client", data);
});

socket.on("client_to_server", (data) => {
    // 送信者にデータ送信
    socket.emit("server_to_client", data);
});

// socket.on("client_to_server", (data) => {
//     // 特定のユーザにデータ送信
//     // 特定のクライアントの socket.id を取得
//     io.to(特定のsocket.id).emit("info", "送信者のあなただけ");
// });

socket.on("client_to_server", (data) => {
    // 送信元以外にデータ送信(ブロードキャスト)
    socket.broadcast.emit("server_to_client_broadcast", data);
});

/* socket.id*/
socket.on("login", () =>{
    // Socket.io のIDを取得
    console.log(socket.id);
});

/* 切断*/
socket.on("disconnect", () => {
    // 処理
});

/* クライアント処理*/
/* インストール*/
<script type="text/javascript" src="/socket.io/socket.io.js"></script>

/* サーバ接続*/
let socket = io.connect(url);

/* サーバ接続イベント*/
socket.on("connect", () =>{
    console.log("connect");
    console.log(socket.id);
});

/* サーバ切断イベント*/
// 切断
socket.on("disconnect", (reason) =>{
    console.log("disconnect");
});

/* クライアントからサーバ接続処理*/
// socket.emit(イベント名, データ);

/* クライアント受信処理*/
// socket.on(イベント名, (data) => {
//     // サーバからデータを受信すると処理
// });
