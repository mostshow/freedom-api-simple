var express = require('express');
var router = express.Router();

/* 获取id */
router.get('/getId', function(req, res, next) {
    var result = {
        code: '0',
        msg: '',
        data: {
            id: '1'
        }
    }
	res.send(JSON.stringify(result));
});

router.get('/getInfo', function(req, res, next) {
    var id = req.param('id');
    var result = {
    };
    if(!id) {
        result.code = '1';
        result.msg = 'id不能为空';
    } else if(id != 1) {
        result.code = '2';
        result.msg = '数据不存在';
    } else {
        result.code = '0';
        result.msg = '';
        result.data = {
            info: '恭喜你，拿到了数据'
        }
    }
    res.send(JSON.stringify(result));
});

router.get('/getName', function(req, res, next) {
    var result =  {
        code: '0',
        msg: '',
        data: {
            name: 'gege'
        }
    };
    res.send(JSON.stringify(result));
});

router.get('/getInfoByNameAndId', function(req, res, next) {
    var id = req.param('id');
    var name = req.param('name');
    var result = {
    };
    if(!id || !name) {
        result.code = '1';
        result.msg = '参数错误';
    } else if(id != 1 || name != 'gege') {
        result.code = '2';
        result.msg = '数据不存在';
    } else {
        result.code = '0';
        result.msg = '';
        result.data = {
            info: '恭喜你，拿到了数据'
        }
    }
    res.send(JSON.stringify(result));
});


module.exports = router;
