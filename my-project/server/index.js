
// node 后端服务器

const userApi = require('./api/userApi')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const router = require('./routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 后端api路由
// app.use('/api/user', userApi)

// app.use(userApi)

app.use(router)

// 监听端口
app.listen(3000)
console.log('success listen at port:3000......')
