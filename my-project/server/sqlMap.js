var sqlMap = {
    user: {
        add: 'insert into user(id,name,password) values (0,?,?)',
        select: 'select * from user where name = ?'
    }
}

module.exports = sqlMap