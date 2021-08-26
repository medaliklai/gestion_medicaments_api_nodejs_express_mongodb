const mongoose = require( 'mongoose' );

const Med = require( '../models/medicament' );


//home page
const home_page = ( req, res ) => {
    Med.find()
        .then( ( result ) => {
            res.render( 'index', {
                medicaments: result
            } );
        } )

}
//affiche tous les médicaments
const affiche_med_get = ( req, res ) => {
    Med.find()
        .then( ( result ) => {
            res.send( result );
        } )
        .catch( ( err ) => {
            console.log( err );
        } );
}

//create  médicament
const ajouter_med_post = ( req, res ) => {
    const newMed = req.body;
    const med = new Med( newMed );
    med.save()
        .then( ( result ) => {
            res.send( result );
        } )
        .catch( ( err ) => {
            res.send( err.message )
        } );
}

//delete medicament by id
const supprimer_blog_delete = ( req, res ) => {
    const id = req.params.id;
    Med.findByIdAndDelete( id )
        .then( ( result ) => {
            res.send( result );
        } )
        .catch( ( err ) => {
            console.log( err );
        } );
}

//find med by id
const find_med_get = ( req, res ) => {
    Med.findById( req.params.id )
        .then( ( result ) => {
            res.send( result );
        } )
        .catch( ( err ) => {
            console.log( err );
        } );
}

//modifier blog
const modifier_blog_put = ( req, res ) => {
    const id = req.params.id;
    const med = req.body;
    Med.findByIdAndUpdate( id, med )
        .then( ( result ) => {
            res.send( result );
        } )
        .catch( ( err ) => {
            console.log( err );
        } );
}
module.exports = {
    affiche_med_get,
    ajouter_med_post,
    supprimer_blog_delete,
    find_med_get,
    modifier_blog_put,
    home_page
}