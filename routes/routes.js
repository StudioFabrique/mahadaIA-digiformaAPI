const express = require('express');
const router = express.Router();

//Controllers
const etudiantsController = require('../controllers/etudiantsController')
const formationsController = require('../controllers/sessionsController')

module.exports = function(){

//Routes
router.get('/saveEtudiants', etudiantsController.saveAllEtudiants);
router.get('/etudiants', etudiantsController.getEtudiants);
router.get('/etudiant/:id', etudiantsController.getEtudiantById);

router.post('/etudiant/update', etudiantsController.updateEtudiant);
router.post('/etudiant/:_id', etudiantsController.getEtudiant);
router.get('/etudiant/nom/:Nom', etudiantsController.getEtudiantByNom);

router.get('/saveFormationsComplete', formationsController.saveAllFormationsComplete );
router.get('/saveFormationsResesume', formationsController.saveAllFormationsResume );

router.get('/formationsComplete', formationsController.getFormationsComplete);
router.get('/formationsComplete/:id', formationsController.getFormation);
router.post('/formationsCompleteBy/:id', formationsController.getFormationById);

router.get('/formationsResume', formationsController.getFormationsResume);



return router;
}