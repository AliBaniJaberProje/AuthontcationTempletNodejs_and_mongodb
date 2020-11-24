var express = require('express');
var router = express.Router();
const UserController=require('../Controller/UserController')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.status(200).json({
        status:200,
        message:'im runing .... send request'
    })
});

router.post('/', UserController.addUser)
router.patch('/', UserController.updateUser)
router.get('/u', UserController.getAllUser)
router.get('/:id', UserController.filterUser)
router.delete('/', UserController.deleteUser)

module.exports = router;
