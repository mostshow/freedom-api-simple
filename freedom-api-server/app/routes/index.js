var express = require('express');
var router = express.Router();
var freedomApi = require('freedom-api');


router.post('/freedomApi', function(req, res, next) {

    //规则
    var rule = JSON.parse(req.body.rule);
    //透传cookie，以便保持登录状态
    var cookie = req.get('Cookie');

    freedomApi(rule, cookie, function(result, setCookie) {
        //写回cookie
        res.append('Set-Cookie', setCookie);
        res.send(JSON.stringify(result));
    });
});

module.exports = router;
