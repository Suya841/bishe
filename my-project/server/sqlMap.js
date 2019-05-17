var sqlMap = {
    user: {
        add: 'insert into user(id,name,password) values (0,?,?)',
        select: 'select * from user where name = ?',
        userInfo: 'select * from userInfo where userID = (select id from user where name = ?)',
        addInfo: 'insert into userinfo(userID,name,headImg) values(?,?,?)',
        upHead: 'update userinfo set headImg = ? where userID = ?'
    },
    goods: {
        getList: 'select * from goods',
        getDetail: 'select * from detail where PID = ?',
        getStyle: 'select * from goods where style in (?)',
        getRanking: 'select * from goods,ranking where goods.PID = ranking.PID order by ranking  limit 6'
    },
    content: {
        upimg: 'insert into img(name,status,uid) values (?,?,?)',
        uploadInfo: 'insert into content(id,userID,content,img,creatDate) values (0,?,?,?,?)',
        getContent: 'select content.userID,headImg,name,content,img,creatDate from content,userInfo where content.userID = userInfo.userID order by creatDate desc limit 10'
    }
}

module.exports = sqlMap