// const mongoose = require("mongoose");
const { Schema, model } = require('mongoose');

const formationSchemaResume = new Schema({

    id: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    startDate: { type: String},
    endDate: { type: String },
    trainees: { type: Array, default:[] },

    
});

const modelFormationResume = model("formationsResume",formationSchemaResume);

module.exports = modelFormationResume;