// コントローラーの作成 - ログイン、ログアウト処理を実装
    // 例えば、ログイン認証処理はUserController.jsのauth()に、configやredirect()などで処理
// exports.auth = (req, res) => {
//     const login_name = req.body.login_name;
//     const password = req.body.password;

//     if(login_name == config.user.login_name && password == config.user.password) {
//         res.redirect("/user");
//     } else {
//         res.redirect("/login");
//     }
// }