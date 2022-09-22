const { Schema, model } = require('mongoose');



const eventsSchema = new Schema({
    idEv: { type: String, required: true, unique: true},
    typeEv: { type: String, required: true },
    createdAt: { type: String },
    actorEv: { type: Object },
    repoEv: { type: Object },
    Org: { type: Object },



    
});

module.exports = model('ghEvents', eventsSchema);