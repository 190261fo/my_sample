/*レスポンス*/
// end()
// httpモジュールで利⽤されるend()メソッド、Expressでもそのまま利⽤可能

// send()
// Expressのレスポンスメソッドで、ヘッダー処理を調整して、最終的にend()処理する。
// よって、end()とsend()を併⽤することはできない。

// json()
// JavaScriptの標準メソッド、JSON.stringfy()を実⾏して、send()する。
// send()を利⽤しても JSON変換処理をしてくれるため、どちらを利⽤してもよい。

/* 名前付きパラメータ取得*/
// Express では「 : 」を利⽤して、URLを分析して名前付きパラメータで値を取得することができる
// app.get("//:id", 関数);

/*パラメータ値の取得*/
// パラメータはリクエストオブジェクトの params から名前を付けて取得できる

// /products/3 にアクセスした場合
    // 例えば「:id」と名前を付けると、params.id で取得できる。
    // URL ではパラメータ値が「3」のため、以下は「3」が表⽰される。
// app.get("/products/:id", (req, res) => {
//     let id = req.params.id;
//     console.log(id); //3 表示
//     });
     
/* リダイレクト*/
// リクエスト後で処理した後にリダイレクトするには、redirect() メソッドを利⽤する
// res.redirect(URL);

// user/edit/xx にリダイレクト
    // user/update/xx リクエスト後に、user/edit/xx にリダイレクトする。
// app.get("/user/edit/:id", (req, res) => {
//     console.log(req.params.id);
//     res.send('edit page');
//     });
//     app.get("/user/update/:id", (req, res) => {
//     const url = '/user/edit/' + req.params.id;
//     res.redirect(url);
//     });