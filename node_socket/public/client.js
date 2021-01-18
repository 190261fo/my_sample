const url = "";

$(() => {
    // Socket.io 接続
    let socket = io.connect(url);

    // 接続が確立した
    socket.on("connect", () => {
        console.log("connection!!");
        console.log(socket.id);
            // ブラウザ更新ではまだ？出ない
    });

    // サーバから受信すると処理される
    // server_to_client は自分で命名 : サーバに合わせる
    socket.on("server_to_client", (data) => {
        console.log(data)
            // ブラウザ開くと出る？(serverのconnection!)
        
        // pタグを生成してhtmlを入れる
        let p = $("<p>").html(data);
        // id=message にpタグを追加
        $("#message").append(p);

    });

    // id=send のElement(要素)がクリックされたら
    // $("#send").on("click", () => {
    $("#send").on("click", function (event) {
        // クライアントからサーバにデータ送信
        let message = "こんにちは";

        // client_to_server は自分で命名 : サーバに合わせる
        socket.emit("client_to_server", message);
            // ブラウザsendボタン押して出る
    });
});
