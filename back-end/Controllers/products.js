
const Product = require( '../Models/Products' );

const products = async ( req, res ) =>
{
    let result = await Product.find();
    res.send( result );
} 

module.exports = {
    products,
}