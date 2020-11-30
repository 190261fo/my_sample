<?php
session_start();

$userName = "";
$passWord = "";
$message = "";
$errorMessage = "";

if (isset($_POST["decision"]) && $_POST["decision"] === "1") {
	if (!empty($_POST["name"]) && !empty($_POST["pass"])) {
		$userName = $_POST["name"];
		$passWord = $_POST["pass"];
	} else {
		$message = "名前かパスワードが未入力です";
	}
}

if ($userName && $passWord) {
	if ($userName == "yse" && $passWord == "2019"){
		session_name("login");
		$_SESSION['login'] = true;
		header('Location: index.html');
	}else{
		$message = "ユーザー名かパスワードが間違っています";
	}
}

if (isset($_SESSION["error2"])) {
	$errorMessage = $_SESSION["error2"];
	$_SESSION["error2"] = null;
}
?>
<!DOCTYPE html>
<html lang="ja">

<head>
	<meta charset="UTF-8">
	<title>ログイン画面</title>
    <style>
        @charset "utf-8";
        @font-face{
            font-family:"メイリオ";
            src: url('');
        }

        body{
            font-family:"menma";
            background-color:#efffff;
        }

        #main{
            margin:auto;
            width:600px;
            height:500px;
            background-color: #dbedff;
            border-radius: 6px;
            box-shadow:3px 3px 0px #c1e0ff;
        }

        #main h1{
            font-family:"menma";
            font-size: 45px;
            text-align: center;
            width:600px;
            height:55px;
            background-color: #b2d8ff;
            border-radius: 6px 6px 0px 0px;
        }

        #log input{
            font-family:"Meiryo UI";
            font-size: 25px;
            width:70%;
            padding:15px;
            margin-top: 15px;
            border-radius: 6px;
        }

        #log button{
            font-family:"menma";
            font-size: 25px;
            width:70%;
            padding:15px;
            margin-top: 15px;
            border-radius: 6px;
        }

        #button{
            background-color: #c6ffff;
            box-shadow: 3px 3px 0px #b2d8ff;
            outline: none;
            border-style: none;
        }

        #log{
            text-align: center;
        }

        #error{
            font-size: 20px;
            color: #ff7f7f;
            width:300px;
            margin: auto;
            padding-left: 25px;
            padding-top: 20px;
        }

        #msg{
            font-size: 20px;
            width:300px;
            margin: auto;
            padding-left: 25px;
            padding-top: 20px;
            color: #ff7f7f;
        }
    </style>
</head>

<body id="login">
	<div id="main">
		<h1>ログイン画面</h1>
		<?php
		echo "<div id='error'>$errorMessage</div>";
		echo "<div id='msg'>$message</div>";
		?>
		<form action="login.php" method="post" id="log">
			<p>
				<input type='text' name="name" size='5' placeholder="Username">
			</p>
			<p>
				<input type='password' name='pass' size='5' maxlength='20' placeholder="Password">
			</p>
			<p>
				<button type="submit" formmethod="POST" name="decision" value="1" id="button">Login</button>
			</p>
		</form>
	</div>
</body>
</html>