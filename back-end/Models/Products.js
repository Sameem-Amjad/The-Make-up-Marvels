const mongoose = require( 'mongoose' );
const productSchema = new mongoose.Schema( {
    productName: String,
    productDescription: String,
    productQuantity: Number,
    productQuality: String,
    imageUrl: String,
    productDateAdded: Date
} );
module.exports = mongoose.model( 'products', productSchema);