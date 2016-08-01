var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    console.log('req:' + req.get('Cookie'));
    console.log('res:' + res.get('Set-Cookie'))
    var username = req.body.username;
    var password = req.body.password;
    req.session.userInfo = {
        code: '0',
        data: {
            id: '0',
            username: username,
            password: password
        },
        msg: ''
    };
    var result = {
        code: '0',
        data: {
            
        },
        msg: ''
    };
    res.send(JSON.stringify(result));
});

/* 获取用户信息 */
router.get('/getUserInfo', function(req, res, next) {
  console.log(req.get('Cookie'));
  if(req.session.userInfo) {
    res.send(JSON.stringify(req.session.userInfo));
  } else {
    var result = {
        code: '1',
        data: {
            
        },
        msg: '未登录'
    };

    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  }
});


router.get('/getScoreByUserId', function(req, res, next) {
	var id = req.param('userid');
	var scoreList = {
		'1': {
			score: 3
		},
		'2': {
			score: 5
		}
	};
	var resData = {

	};
	if(id && scoreList[id]) {
		resData.code = '0';
		resData.data = scoreList[id];
		resData.msg = '';
	} else if(!id) {
		resData.code = '1';
		resData.msg = '用户id不能为空';
	} else {
		resData.code = '2';
		resData.msg = '找不到用户数据';
	}

	res.send(JSON.stringify(resData));
});


router.post('/setScore', function(req, res, next) {
    console.log(req.body);
    var score = req.body.score;
    var scoreData = {
        code: '0',
        msg: '',
        data: {
            score: score
        }
    };
    res.send(JSON.stringify(scoreData));
});

module.exports = router;
