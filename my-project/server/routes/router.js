let express = require('express')
let api = require('../api')
let user = require('../controls/user')
let router = express.Router()

router.post(api.userAdd,user.addOne)

module.exports = router