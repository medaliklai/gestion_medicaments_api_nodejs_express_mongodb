const express = require( 'express' );
const mongoose = require( 'mongoose' );
const medRoutes = require( './routes/medicamentRoute' );
const app = express();

// middelwar
app.use( express.json() );
app.use( express.static( 'public' ) );
app.set( 'view engine', 'ejs' );

// connect to database
const dbUrl = 'mongodb+srv://medaliklai:12345@nodebase.zsx9n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect( dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } )
    .then( () => {
        app.listen( 3000, () => {
            console.log( 'server listen on port 3000' );
        } );
    } )
    .catch( ( err ) => {
        console.log( err );
    } );

app.use( medRoutes );