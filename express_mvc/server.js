// モジュール読み込み
const express = require("express");
const routes = require("./routes");
const ejs = require("ejs");
const config = require("config");

// default.json から設定読み込み
const port = config.server.port;
const host = config.server.host;

// Expressを作成し、ミドルウェアで各設定を有効化


