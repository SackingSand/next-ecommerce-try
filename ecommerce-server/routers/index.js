const router = require('express').Router()
const cartController = require('../controllers/cartController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const authenticate =  require('../middlewares/userauth')


router.get    ("/cart/"   , authenticate, cartController.getCart);
router.post   ("/cart/"   , authenticate, cartController.add);
router.put    ("/cart/:id", authenticate, cartController.updateOne);
router.delete ("/cart/:id", authenticate, cartController.deleteOne);

router.get    ("/checkout", authenticate, cartController.checkout)

router.get    ("/product/"   , productController.getAll);
router.get    ("/product/:id", productController.getOne);
router.put    ("/product/updateamount/:id/:change", productController.updateAmount);

router.get    ("/user/:id"  , userController.getOne);
router.post   ("/user/login", userController.login);
router.put    ("/user/updatesaldo/:id/:change"  , userController.updateSaldo);

module.exports = router
