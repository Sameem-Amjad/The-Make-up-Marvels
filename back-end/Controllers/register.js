const User = require( '../Models/users' );
const bcrypt = require( 'bcrypt' );
const register = async ( req, res ) =>
{
    
    console.log( req.body);
    try
    {
        const {name, email, password } = req.body;
        console.log( email ); 
        // Check if the email is already taken
        const existingUser = await User.findOne( { email } ).catch( ( e ) =>
        {
            console.log( e ); 
        });
        if ( existingUser )
        {
            return res.status( 400 ).json( { message: 'Email already in use.' } );
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash( password, 10 );

        // Create a new user
        const newUser = new User( {name, email, password: hashedPassword } );
        await newUser.save();

        res.status( 201 ).json( { message: 'User registered successfully.' } );
    } catch ( error ) 
    {
        console.log(error)
        res.status( 500 ).json( { error: 'Internal Server Error' } ); 
    }

}; 
module.exports = register;