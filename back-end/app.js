var createError = require( 'http-errors' );
const User = require( './Models/users' );
const passport = require( 'passport' );
const localStrategy = require( 'passport-local' ).Strategy;
const bcrypt = require( 'bcrypt' );

var express = require( 'express' );
const session = require( 'express-session' );
require('dotenv').config(); 
require( './Database/database' );   
const secret = process.env.Secret_key;
const cors = require( 'cors' );
var path = require( 'path' );
var cookieParser = require( 'cookie-parser' );
var logger = require( 'morgan' ); 
// Passport middleware
var app = express();
app.set( 'view engine', 'ejs' );
app.use(session({
  secret: secret, // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
}));
app.use( passport.initialize() );

app.use( passport.session() );

app.use( logger( 'dev' ) );
// app.use( cors() );
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
})
app.use( express.json() );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, 'public' ) ) );
// Passport local strategy
passport.use( new localStrategy( { usernameField: 'email' }, ( email, password, done ) =>
{
  User.findOne( { email: email }, ( err, user ) =>
  {
    if ( err ) return done( err );

    // User not found
    if ( !user ) return done( null, false, { message: 'Incorrect email.' } );

    // Compare password
    bcrypt.compare( password, user.password, ( err, isMatch ) =>
    {
      if ( err ) return done( err );

      if ( isMatch )
      {
        res.send( user );
        return done( null, {id:user,email:user.email} );
      } else
      {
        return done( null, false, { message: 'Incorrect password.' } );
      }
    } );
  } );
} ) );

// Serialize and deserialize user
passport.serializeUser( ( user, done ) =>
{
  done( null, user.id );
} );

passport.deserializeUser( ( id, done ) =>
{
  User.findById( id, ( err, user ) =>
  {
    done( err, user );
  } );
} );


var registerRouter = require( './routes/register' );
var loginRouter = require( './routes/login' );
var adminRouter = require( './routes/admin' );
var productRouter = require( './routes/product' );
var orderRouter = require( './routes/order' );



app.use( '/signup', registerRouter );
app.use( '/login', loginRouter );
app.use( '/admin', adminRouter ); 
app.use( '/product', productRouter );
app.use( '/', orderRouter ); 

// catch 404 and forward to error handler
app.use( function ( req, res, next )
{
  next( createError( 404 ) );
} );

// error handler
app.use( function ( err, req, res, next )
{
  // set locals, only providing error in development
  res.status( err.status || 500 ).json( {
    error: {
      message: err.message,
      stack: req.app.get( 'env' ) === 'development' ? err.stack : undefined,
    },
  } );
} );

module.exports = app;
