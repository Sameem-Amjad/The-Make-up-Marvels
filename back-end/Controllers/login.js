require( 'dotenv' ).config();
const jwt = require( 'jsonwebtoken' );
const loginModel = require( '../Models/users' );
const secret = process.env.Secret_key;
const bcrypt = require( 'bcrypt' );
const login = async ( req, res ) =>
{
    if ( req.body.name )
    {
        const { email, password } = req.body;
        console.log( email );
        let User = await loginModel.findOne( { email } );
        console.log( User );
        User?
            bcrypt.compare( password, User.password, ( err, isMatch ) =>
            {
                if ( err ) return done( err );

                if ( isMatch )
                {
                    let klo = { 
                        token: jwt.sign( { user: User }, secret, { expiresIn: '1h' } ), 
                        userEmail: email
                    };
                    res.send( klo );
                } else
                {
                    res.send( { message: 'Incorrect password.' } );
                }
            } ) : res.send( { message: "User not found" } );

    }
};
module.exports = login;       