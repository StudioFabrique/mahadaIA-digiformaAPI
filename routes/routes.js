const express = require('express');
const router = express.Router();

//Controllers
const etudiantsController = require('../controllers/etudiantsController')

module.exports = function(){

//Routes
router.get('/saveEtudiants', etudiantsController.saveAllEtudiants);
router.get('/etudiants', etudiantsController.getEtudiants);
router.post('/etudiants/:_id/:dc/:gh', etudiantsController.updateEtudiant);
router.post('/etudiant/:_id', etudiantsController.getEtudiant);
router.get('/etudiant/:_id', etudiantsController.getEtudiantById);
router.get('/etudiant/nom/:Nom', etudiantsController.getEtudiantByNom);


return router;
}