require('dotenv').config(); 
const databaseUrl = process.env.DATABASE_URL || "";
const database_name = process.env.Database_Name;
const mongoose = require( 'mongoose' );
mongoose.connect( databaseUrl, {
  useNewUrlParser: true, 
  useUnifiedTopology: true,
}).then(()=>{console.log("database connected successfully") }).catch((e)=>{console.log(e +"sameeem")}); 
         
