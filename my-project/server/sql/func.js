let mysql = require('mysql');
let db = require('../db');
let pool = mysql.createPool(db.mysql);

// // 连接数据库
// var conn = mysql.createConnection(db.mysql);

// conn.connect();

module.exports = {
    connPool (sql, val, cb) {
        pool.getConnection((err, conn) => {
            let q = conn.query(sql, val, (err, rows) => {

                if (err) {
                    console.log(err);
                }
                console.log('sql===')
                console.log(rows)


                cb(err, rows);

                conn.release();
            });
        });
    },

    // json格式
    writeJson(res, code = 200, msg = 'ok', data = null) {
        let obj = {code, msg, data};

        if (!data) {
            delete obj.data;
        }

        res.send(obj);
    },
};