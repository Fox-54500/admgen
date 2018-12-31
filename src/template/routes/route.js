// ---------------- Created By: Adm Generator
"use strict";
var express = require('express');
var router = express.Router();
require('./common');

router.get('/', list);

function list(req, res, next) {
    myApp.getStaffAuthArray(req.user.gid, '$YourKey$').then(function (data) {   // 根据动作找回用户在当前页面的权限列表
        res.render('$YourModules$/index.html', {rights: data});               // 根据权限渲染页面
    }).catch(function (err) {
        res.json(err);
    });
}

module.exports = router;
