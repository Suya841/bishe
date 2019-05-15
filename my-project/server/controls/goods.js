let $sql = require('../sqlMap.js')
let func = require('../func')

module.exports = {
    getList (req,res) {
        var sql = $sql.goods.getList
        let id = req.body.id

        func.connPool(sql,[],(err,rows) => {
            console.log('goodslist=====')
            // console.log(rows)
            let len = rows.length || 0
            res.json({code:200,msg:'ggg',data:rows,cuur:len})
        })
    },

    getDetail (req,res) {
        var sql = $sql.goods.getDetail
        let PID = req.body.PID

        func.connPool(sql,[PID],(err,rows) => {
            console.log('goodslist=====')
            console.log(rows)
            res.json({code:200,msg:'ddd',data:rows})
        })
    },

    checkStyle(req,res) {
        var sql = $sql.goods.getStyle
        let rul = req.body.rul

        console.log('rul' + rul)
        func.connPool(sql,[rul],(err,rows) => {
            console.log('style=====')
            // console.log(rows)
            let len = rows.length || 0
            res.json({code:200,msg:'sss',data:rows,cuur:len})
        })
    },

    checkRanking(req,res) {
        var sql = $sql.goods.getRanking
        let rul = req.body.rul
        func.connPool(sql,[],(err,rows) => {
            console.log('style=====')
            // console.log(rows)
            res.json({code:200,msg:'sss',data:rows})
        })
    },


    uploadInfo(req,res) {
        var sql = $sql.content.uploadInfo
        let re = req.body
        func.connPool(sql,[re.userID,re.content,re.img,re.creatDate],(err,rows) => {
            console.log('style=====')
            // console.log(rows)
            res.json({code:200,msg:'sss',data:rows})
        }) 
    },

    getContent(req,res) {
        var sql = $sql.content.getContent
        let re = req.body
        func.connPool(sql,[],(err,rows) => {
            console.log('result=====')
            // console.log(rows)
            if (rows) {
                res.json({code:200,msg:'sss',data:rows})
            }
        }) 
    }




}