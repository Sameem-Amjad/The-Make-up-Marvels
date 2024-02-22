const mongoose = require( 'mongoose' );
const passportLocalMongoose = require( 'passport-local-mongoose' );
const userSchema = new mongoose.Schema( {
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
} );  
userSchema.plugin( passportLocalMongoose );
module.exports = mongoose.model( 'users', userSchema ); 