const express = require( 'express' );
const register = require( '../Controllers/register' );
const router = express.Router();
router.post( '/', register );
module.exports = router; 