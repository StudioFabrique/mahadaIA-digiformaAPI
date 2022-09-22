const mongoose = require("mongoose");


const serverSchema = new mongoose.Schema({
    serverID:{type:String, required: true},
    serverName:{type:String},
    serverDescription: {type:String},
    aproxMemberCount: {type:Number},
    aproxPresenceCount: {type:Number},
    serverChannels:{type:Array}
    channelsRef: [{ type: Schema.Types.ObjectId, ref: 'dcchannels' },{default:null}],
    usersRef: [{ type: Schema.Types.ObjectId, ref: 'dcusers' },{default:null}],
    messagesRef: [{ type: Schema.Types.ObjectId, ref: 'dcmessages' },{default:null}],
});

const modelServer = mongoose.model("dcServers",serverSchema);

module.exports = modelServer