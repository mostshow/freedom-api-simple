var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
}));


app.use('/', routes);
app.use('/users', users);

module.exports = app;
