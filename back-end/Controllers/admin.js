const Product = require('../Models/Products')
const User = require( '../Models/users' );
const Order = require('../Models/Order')
const addProduct= async ( req, res ) =>
{
    console.log( req.body );
    if ( req.body.productName !== "" )
    {
        let product = new Product( req.body );
        let result = await product.save();
        result = JSON.stringify( result );
        console.log( result );
        res.send( result );
    } else
    {
        res.send( "no product" );
    }
};
const updateProduct =async ( req, res ) =>
{
    console.log( req.body );
    if ( req.body.productName !== "" )
    {
        let product = await Product.updateOne( { "productName": req.body.productName }, { $set: { "productName": req.body.updateName } } );
        console.log( product );
        res.send( product );
    } else
    {
        res.send( "no product" );
    }
}
const deleteProduct=  async ( req, res ) =>
{
    console.log( req.body.productName );
    if ( req.body.productName !== "" )
    {
        let product = await Product.deleteOne( { "productName": req.body.productName } ); 
        console.log( product );
        res.send( product );
    } else
    {
        res.send( "no product" );
    }
}
const getUsersOrders = async ( req, res ) =>
{
    let users = await Order.find().populate('user_id');
    if ( users )
    {
        console.log(users[0])
        res.send(users)
    } else
    {
        res.send( "no users" );
    }
}
module.exports = {
    addProduct,
    updateProduct, 
    deleteProduct,
    getUsersOrders
}