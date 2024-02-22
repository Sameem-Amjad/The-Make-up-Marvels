const orderModel = require('../Models/Order')
const buyProduct = async ( req, res ) =>
{
    console.log( req.body.product );
    delete req.body.product._id;
    let result = new orderModel( req.body.product );
    result = await result.save();
    console.log( result ); 
    if ( result )   
    {
        res.send( {"result": "success" });
    } else
    {
        res.send( { "result": "error" } );
    }
};

const userOrders =  async ( req, res ) =>
{
    let result = await orderModel.find();
    res.send( result );
};
const getOrderById = async ( req, res ) =>
{
    let { uid } = req.params;
    console.log( uid );
    let response = await orderModel.find( { user_id: uid } ).populate('user_id');
    if ( response )
    {
        res.send( response );
    }else{
        res.send( "no Orders from User " + { uid } );
    }
}
module.exports = {
    buyProduct,
    userOrders
    ,getOrderById 
}