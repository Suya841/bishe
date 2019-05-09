// let func = require('../sql/func');
// var $sql = require('../sqlMap')

// module.exports = {
//     getLisr (req,res) {
//         var sql = $sql.goods.getList;
//         var params = req.body;
//         console.log(params);

//         func.connPool(sql,[params.id], (err,rows) => {
//             console.log('rows=')
//             console.log(rows)
//                     res.json({code:200,msg:'ttt'});
//                 });
//     }
// }