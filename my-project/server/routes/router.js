let express = require('express');
// let goods = require('../controls/goods');
let user = require('../controls/user');
let api = require('../api');
// let upload = require('../utils/upload');


//这个原有的
// var models = require('../db');
// var express = require('express');
// var router = express.Router();
// var mysql = require('mysql');
// var $sql = require('../sqlMap');
// let api = require('../api');


let router = express.Router();

// goods
// router.get(api.goodsList,goods.getLisr);

// router.post(api.goodsDetail, goods.fetchById);
// router.post(api.goodsAdd, goods.addOne);
// router.post(api.goodsDelete, goods.deleteOne);
// router.post(api.goodsDeleteMulti, goods.deleteMulti);
// router.post(api.goodsUploadImg, upload.single('avatar'),goods.uploadGoodsImg); // 图片上传

// user
// router.get(api.userList, user.fetchAll);
// router.get(api.userLogout, user.logout);
// router.get(api.userAutoLogin, user.autoLogin); // 自动登录

router.post(api.userAdd,user.addOne);
// router.post(api.userDelete, user.deleteOne);
// router.post(api.userDeleteMulti, user.deleteMulti);
router.post(api.userLogin, user.login); // 登录
// router.post(api.userChangeRole, user.controlVisit, user.changeRole); // 更改权限




module.exports = router;