// let sql = require('../sql/sql');
// let moment = require('moment');
// let bcrypt = require('bcryptjs');
let func = require('../sql/func');
var $sql = require('../sqlMap')

module.exports = {

    // fetchAll (req, res) {
    //     func.connPool(sql.queryAll, 'user', rows => {
    //         rows = formatData(rows);
    //         res.json({code: 200, msg: 'ok', users: rows});
    //     });

    // },

    // 添加用户
    addOne (req, res) {
        // let name = req.body.name;
        // let pass = req.body.pass;
        // let query = 'INSERT INTO user(user_name, password, role) VALUES(?, ?, ?)';

        // // 密码加盐
        // bcrypt.hash(pass, 10, (err, hash) => {
        //     if (err) console.log(err);

        //     pass = hash;

        //     let arr = [name, pass, role];

        //     func.connPool(query, arr, rows => {
        //         res.json({code: 200, msg: 'done'});
        //     });

        // });


        var sql = $sql.user.add;
        var params = req.body;
        console.log(params);

        func.connPool(sql, [params.userName, params.password], (err,rows) => {
            console.log('rows=')
            console.log(rows)
                    res.json({code:200,msg:'ttt'});
                });
    },


    // 登录
    login (req, res) {
        let userName = req.body.userName
        let pass = req.body.password;
        console.log(userName)
        console.log(pass)
        let selSql = $sql.user.select

        func.connPool(selSql, [userName], (err,rows) => {
            console.log('login test====')
            console.log(rows)
            // console.log(rows==[])
            // console.log(rows==null)
            // console.log(rows.length==0)

            if (rows.length==0) {
                console.log('111===')
                res.json({code: 400, msg: '用户不存在'})
                return
            }

            let password = rows[0].password;

            if (pass == password) {
                res.json({code: 200, msg: '登录成功'});
            }else{
                res.json({code: 400, msg: '密码错误,请输入正确的密码'});
            }



            // bcrypt.compare(pass, password, (err, sure) => {
            //     if (sure) {
            //         let user = {
            //             user_id: rows[0].user_id,
            //             user_name: rows[0].user_name,
            //             role: rows[0].role,
            //         };

            //         req.session.login = user;

            //         res.json({code: 200, msg: '登录成功', user: user});
            //     } else {
            //         res.json({code: 400, msg: '密码错误'});
            //     }
            // });

        });

    },


    // // 自动登录
    // autoLogin (req, res) {
    //     let user = req.session.login;
    //     if (user) {
    //         res.json({code: 200, msg: '自动登录', user: user});

    //     } else {
    //         res.json({code: 400, msg: 'not found'});
    //     }
    // },

    // // 注销
    // logout (req, res) {
    //     req.session.login = null;

    //     res.json({code: 200, msg: '注销'});
    // },

   
};