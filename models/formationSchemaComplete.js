const { Schema, model } = require('mongoose');

const formationSchemaComplete = new Schema({

    id: { type: String, required: true, unique: true},
    name: { type: String, required: true },
    startDate: { type: String},
    endDate: { type: String },
    trainees: {type: Array},
    abandons: {type: Array}


    
});

const modelFormationComplete = model("formationsComplete",formationSchemaComplete);

module.exports = modelFormationComplete;