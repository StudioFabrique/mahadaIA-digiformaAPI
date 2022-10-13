// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const etudiantsSchema = new Schema({

    id: { type: String, required: true, unique: true},
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String },
    phone: { type: String },
    lastDiploma: { type: String },
    roadAddress: { type: String },
    cityCode: { type: String },
    city: { type: String },
    civility: { type: String },
    nationality: { type: String },
    birthdate: { type: String },
    status: { type: String },
    handicaped: { type: String },
    formations: { type: Array },
    ghUser: { type: Schema.Types.ObjectId, ref: 'ghUser' },
    dcUser: { type: Schema.Types.ObjectId, ref: 'dcUser' }

    
});

const modelDigiData = model("etudiants",etudiantsSchema);

module.exports = modelDigiData;