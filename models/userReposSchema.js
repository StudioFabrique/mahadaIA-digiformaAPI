const mongoose = require("mongoose");


const reposSchema = new mongoose.Schema({
    repoID:{type:String, required: true, unique: true},
    repoName:{type:String,},
    repoDescription: {type:String,},
    repoLanguage: {type:String, },
    repoPushedDate: {type:Date},
    repoCreatedDate: {type:Date,},
    repoUpdatedDate:{type:Date,},
    repoUrl:{type:String,},
    repoEventsUrl:{type:Object,},
    ownerName:{type:String,},
    ownerID:{type:Number,},
    ownerReceivedEvents_url:{type:Object,}, 
});

const modelRepos = mongoose.model("ghRepos",reposSchema);

module.exports = modelRepos