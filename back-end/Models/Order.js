const mongoose = require( 'mongoose' );
const orderSchema = new mongoose.Schema( {
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required:true
    },
    productName: String,
    productDescription: String,
    productQuantity: Number,
    productQuality: String,
    imageUrl: String,
    productDateAdded: Date
} );
module.exports = mongoose.model( 'orders', orderSchema );