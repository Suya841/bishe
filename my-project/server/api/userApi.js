// var models = require('../db');
// var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
// var $sql = require('../sqlMap');
// let api = require('../api');

// // 连接数据库
// var conn = mysql.createConnection(models.mysql);

// conn.connect();
// var jsonWrite = function(res, ret) {
//   if(typeof ret === 'undefined') {
//     res.json({
//       code: '1',
//       msg: '操作失败'
//     });
//   } else {
//     res.json(ret);
//   }
// };

// // 增加用户接口
// router.post(api.userAdd, (req, res) => {
//   var sql = $sql.user.add;
//   var params = req.body;
//   console.log(params);
//   conn.query(sql, [params.userName, params.password], function(err, result) {
//     if (err) {
//       console.log(err);
//     }
//     if (result) {
//       // jsonWrite(res, result);
//       res.send({code:200,msg:'ttt',aa:result})
//     }
//   })
// });

// module.exports = router;
