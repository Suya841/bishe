let express = require('express')
let api = require('../api')
let user = require('../controls/user')
let goods = require('../controls/goods')
let router = express.Router()

router.post(api.userAdd,user.addOne)
router.post(api.userLogin,user.userLogin)

router.post(api.goodsList,goods.getList)

module.exports = router