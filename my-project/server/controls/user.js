let $sql = require('../sqlMap.js')
let func = require('../func')
// let moment = require('moment')
// let bcrypt = require('bcryptjs')

module.exports = {
    addOne (req,res) {
        var sql = $sql.user.add
        var infor = $sql.user.addInfo
        var params = req.body
        let selSql = $sql.user.select

        func.connPool(selSql, [params.userName], (err,rows) => {
            if (rows.length != 0) {
                console.log('111===')
                res.json({code: 400, msg: '用户已存在'})
                return
            }
            func.connPool(sql,[params.userName,params.password],(err,rows) => {
                if (rows) {
                    func.connPool(selSql, [params.userName],(err,rows) => {
                        let id = rows[0].id
                        let args = {
                            name: params.userName,
                            userID: id,
                            headImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3052225689,834940206&fm=26&gp=0.jpg'
    
                        }
                            func.connPool(infor, [args.userID,args.name,args.headImg],(err,rows) => {
                        })
                    })
                    res.json({code:200,msg:'done'})
                }else{
                    res.json({code:400,msg:'cuol'})
                }
                    
            })
        })

        // // 密码加盐
        // var name = params.userName
        // var pass = params.password
        // bcrypt.hash(pass, 10, (err, hash) => {
        //     if (err) console.log(err);

        //     pass = hash;

        //     let arr = [name, pass];

        //     func.connPool(sql, arr, rows => {
        //         res.json({code: 200, msg: 'done'});
        //     });

        // });


        
    },

    userLogin (req,res) {
        let userName = req.body.userName
        let pass = req.body.password;
        console.log(userName)
        console.log(pass)
        let selSql = $sql.user.select

        func.connPool(selSql, [userName], (err,rows) => {
            console.log('login test====')
            // console.log(rows)
            // console.log(rows==[])
            // console.log(rows==null)
            // console.log(rows.length==0)

            if (rows.length==0) {
                console.log('111===')
                res.json({code: 400, msg: '用户不存在'})
                return
            }
            
            // let password = rows[0].password
            // 加密后的密码比较
            // bcrypt.compare(pass, password, (err, sure) => {
            //     if (sure) {
            //         let user = rows[0];
            //         res.json({code: 200, msg: '登录成功', user: user});
            //     } else {
            //         res.json({code: 400, msg: '密码错误,请输入正确的密码'});
            //     }
            // });

            let password = rows[0].password;

            if (pass == password) {
                res.json({code: 200, msg: '登录成功'});
            }else{
                res.json({code: 400, msg: '密码错误,请输入正确的密码'});
            }
        })
    },

    userInfo (req,res) {
        var sql = $sql.user.userInfo
        var params = req.body.userName
        console.log('name====')
        console.log(params)
        func.connPool(sql,[params],(err,rows) => {
                // console.log(rows)
                res.json({code:200,msg:'fine',data:rows})
        })
    }
}