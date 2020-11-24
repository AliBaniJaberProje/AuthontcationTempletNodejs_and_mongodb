var express = require('express');
var router = express.Router();
const UserModel=require('../Model/User')
const AuthController=require('../Controller/AuthController')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        status:200,
        message:'im runing .... send auth'
    })
});
router.post('/login',AuthController.login)



module.exports = router;
