const medController = require( '../controllers/medController' );
const express = require( 'express' );
const router = express.Router();

router.get( '/home', medController.home_page )
router.get( '/', medController.affiche_med_get );
router.post( '/', medController.ajouter_med_post );
router.delete( '/:id', medController.supprimer_blog_delete );
router.get( '/:id', medController.find_med_get );
router.put( '/:id', medController.modifier_blog_put );

module.exports = router;