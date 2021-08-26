const mongoose = require( 'mongoose' );

const medSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateFab: {
        type: Date,
        required: true
    },
    dateExp: {
        type: Date,
        required: true
    }
} );

const Med = mongoose.model( 'Med', medSchema );

module.exports = Med;