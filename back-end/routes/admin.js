const express = require( 'express' );
const { addProduct, updateProduct, deleteProduct,getUsersOrders } = require( '../Controllers/admin' );
const router = express.Router();

router.post('/add-product',addProduct)
router.put('/update-product',updateProduct)
router.delete( '/delete-product', deleteProduct )
router.get('/getUsers',getUsersOrders)

module.exports = router; 