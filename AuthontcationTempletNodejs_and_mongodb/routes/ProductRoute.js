var express = require('express');
var router = express.Router();
const ProductController=require('../Controller/ProductController')
const AuthMiddleware=require('../Middleware/UserMiddleware')
/* GET home page. */

router.get('/', function(req, res, next) {
    res.status(200).json({
        status:200,
        message:'im runing .... send request'
    })
});

router.post('/', AuthMiddleware.isAuthorized, ProductController.addProduct)
router.patch('/:id', ProductController.updateProduct)
router.get('/p', ProductController.getAllProduct)
router.get('/:filter/:data', ProductController.filterProduct)
router.delete('/:filter/:data', ProductController.deleteProduct)
router.get('pages/',ProductController.getPageProductPages)
module.exports = router;
