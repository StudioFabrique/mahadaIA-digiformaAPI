const { mongoose, Schema } = require("mongoose");


const messagesSchema = new mongoose.Schema({
    messageID:{type:String, required: true, unique: true},
    messageContent:{type:String,},
    userName: {type:String, required: true},
    userID: {type:String, required: true},
    serverID: {type:String},
    channelID: {type:String, required: true},
    timeStamp:{type:Date, required: true},
    editedTimeStamp:{type:Date,},
    mentions:{type:String,},
    channelsRef: [{ type: Schema.Types.ObjectId, ref: 'dcchannels' },{default:null}],
    usersRef: [{ type: Schema.Types.ObjectId, ref: 'dcusers' },{default:null}],
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' },{default:null}],    
});

const modelMessage = mongoose.model("dcMessages",messagesSchema);

module.exports = modelMessage