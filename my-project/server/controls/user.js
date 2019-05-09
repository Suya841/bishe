let $sql = require('../sqlMap.js')
let func = require('../func')


module.exports = {
    addOne (req,res) {
        var sql = $sql.user.add
        var params = req.body

        func.connPool(sql,[params.userName,params.password],(err,rows) => {

                res.json({code:200,msg:'fine'})
        })
    },

    userLogin (req,res) {
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
        })
    }
}