const express = require( 'express' );
const { buyProduct, products } = require( '../Controllers/products' );
const router = express.Router();

router.get( '/', products );
module.exports = router;