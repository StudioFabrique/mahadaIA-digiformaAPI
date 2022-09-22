const { Schema, model } = require('mongoose');


const channelSchema = new Schema({
    channelID:{type:String, required: true, unique: true},
    channelName:{type:String},
    serverID:{type:String, required: true},
    channelType: {type:String},
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' }]

    
});

module.exports = model('dcChannel', channelSchema);



