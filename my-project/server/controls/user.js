let $sql = require('../sqlMap.js')
let func = require('../func')


module.exports = {
    addOne (req,res) {
        var sql = $sql.user.add
        var params = req.body

        func.connPool(sql,[params.userName,params.password],(err,rows) => {

                res.json({code:200,msg:'fine'})
        })
    }
}