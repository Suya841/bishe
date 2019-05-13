let path = '/api'

module.exports = {
    //user
    userLogin: path + '/user/login',
    userAdd: path + '/user/addUser',

    uploadInfo: path + '/content/upload',
    uploadimg: path + '/content/upimg',
    getContent: path + '/content/getContent',

    //goods
    goodsList: path +'/goods/list',
    goodsDetail:path + '/goods/detail',
    checkStyle: path +'/goods/checkStyle',
    checkRanking: path +'/goods/ranking',
}