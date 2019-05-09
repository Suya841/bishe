let mysql = require('mysql')
let db = require('./db')
let pool = mysql.createPool(db.mySql)

module.exports = {
    connPool (sql,val,cb) {
        pool.getConnection((err,conn) => {
            conn.query(sql,val,(err,rows) => {
                if(err) {
                    console.log(err)
                }

                cb(err,rows)
                conn.release()
            })
        })
    }
}