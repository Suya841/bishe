//1,引入express
var express = require('express')
var app = express()

//2,设置模板引擎
var path = require('path')
const fs = require('fs')
//6,引入body-parser模块
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));

const router = require('./routes/router')

app.use(router)

app.listen(3000)
console.log('success listen at port:3000')