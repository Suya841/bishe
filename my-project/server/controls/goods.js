let $sql = require('../sqlMap.js')
let func = require('../func')

module.exports = {
    getList (req,res) {
        var sql = $sql.goods.getList
        let id = req.body.id

        func.connPool(sql,[],(err,rows) => {
            console.log('goodslist=====')
            console.log(rows)
            res.json({code:200,msg:'ggg',data:rows})
        })
    }
}