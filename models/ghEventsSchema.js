const mongoose = require("mongoose");



const eventsSchema = new mongoose.Schema({
    idEv: { type: String, required: true, unique: true},
    typeEv: { type: String, required: true },
    createdAt: { type: String },
    actorEv: { type: Object },
    repoEv: { type: Object },
    Org: { type: Object },

});

const modelEvents = mongoose.model("ghEvents",eventsSchema);
module.exports = modelEvents




