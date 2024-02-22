const express = require( 'express' );
const { buyProduct, userOrders,getOrderById } = require( '../Controllers/Order' );
const router = express.Router();
router.post('/buy-product',buyProduct);
router.get( '/users-Orders', userOrders );
router.get('/userOrdersById/:uid',getOrderById)
module.exports = router;