const express = require('express');
const router = express.Router();

//Controllers
const etudiantsController = require('../controllers/etudiantsController')
const formationsController = require('../controllers/sessionsController')

module.exports = function(){

//Routes
router.get('/saveEtudiants', etudiantsController.saveAllEtudiants);
router.get('/updateListEtudiants', etudiantsController.updateListEtudiants);
router.get('/etudiants', etudiantsController.getEtudiants);
router.get('/etudiant/:id', etudiantsController.getEtudiantById);

router.post('/etudiant/update', etudiantsController.updateEtudiant);
router.post('/etudiant/:_id', etudiantsController.getEtudiant);
router.get('/etudiant/searchByFirstName/:firstname', etudiantsController.getEtudiantByFirstname);
router.get('/etudiant/searchByLastname/:lastname', etudiantsController.getEtudiantByLastname);

router.get('/saveFormationsComplete', formationsController.saveAllFormationsComplete );
router.get('/updateListFormationsComplete', formationsController.updateListFormationsComplete );
router.get('/saveFormationsResesume', formationsController.saveAllFormationsResume );
// router.get('/saveFormationsResesume', formationsController.saveAllFormationsResume );

router.get('/formationsComplete', formationsController.getFormationsComplete);
router.get('/formationsComplete/:id', formationsController.getFormation);
router.post('/formationsCompleteBy/:id', formationsController.getFormationById);

router.get('/formationsResume', formationsController.getFormationsResume);



return router;
}