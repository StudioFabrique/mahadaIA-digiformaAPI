const { mongoose, Schema } = require("mongoose");


const usersSchema = new mongoose.Schema({
    userID: {type:String},
    userName: {type:String},
    serverID: {type:Array },
    serverRef: { type: Schema.Types.ObjectId, ref: 'dcServers' },
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' }]
    
});

const modelUser = mongoose.model("dcUser",usersSchema);

module.exports = modelUser;