let express = require('express')
let api = require('../api')
let user = require('../controls/user')
let goods = require('../controls/goods')
let router = express.Router()

router.post(api.userAdd,user.addOne)
router.post(api.userLogin,user.userLogin)

router.post(api.goodsList,goods.getList)
router.post(api.goodsDetail,goods.getDetail)
router.post(api.checkStyle,goods.checkStyle)
router.post(api.checkRanking,goods.checkRanking)

router.post(api.uploadInfo,goods.uploadInfo)
router.post(api.getContent,goods.getContent)

module.exports = router