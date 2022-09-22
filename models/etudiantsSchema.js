// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const etudiantsSchema = new Schema({

    id: { type: String, required: true, unique: true},
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Nationalité: { type: String },
    Telephone: { type: String },
    Nee: { type: Date },
    adresse: { type: String },
    status: { type: String },
    handicape: { type: String },
    diplome: { type: String },
    formations: { type: Object },
    ghUser: { type: Schema.Types.ObjectId, ref: 'ghUser' },
    dcUser: { type: Schema.Types.ObjectId, ref: 'dcUser' }
    
});

const modelDigiData = model("etudiants",etudiantsSchema);

module.exports = modelDigiData;