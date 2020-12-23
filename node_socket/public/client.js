const url = "";

$(() => {
    // Socket.io 接続
    let socket = io.connect(url);

    socket.on("connect", () => {
        console.log("connection!!");
        console.log(socket.id);
            // ブラウザ更新ではまだ？出ない
    });

    // サーバから受信すると処理される
    socket.on("server_to_client", (data) => {
        console.log(data)
            // ブラウザ開くと出る？(serverのconnection!)
    });

    $("#send").on("click", () => {
        // クライアントからサーバにデータ送信
        let message = "こんにちは";
        socket.emit("client_to_server", message);
            // ブラウザsendボタン押して出る
    });
});
