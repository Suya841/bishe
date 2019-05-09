/**
 * Created by xiaoze on 2017/12/5.
 */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, password) values (0, ?, ?)',
    select: 'SELECT * from user where name = ?'
  }
  // goods: {
  //   getList: 'select * from index'
  // }
}
module.exports = sqlMap
