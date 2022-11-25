const mongoose = require("mongoose");

const userGithubSchema = new  mongoose.Schema({
    idGh: { type: String, required: true, unique: true},
    nomGh: { type: String, required: true },
    avatarGh: { type: String },
    urlProfilGh: { type: String },
    urlReposGh: { type: String },
    repos: { type: Number },
    reposId: { type: Object },
    createdAt: { type: String },
    eventsRef: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ghEvents' }],
    reposRef:[{ type: mongoose.Schema.Types.ObjectId, ref: 'ghRepos' }]

    
});

const modelUser = mongoose.model("ghUser",userGithubSchema);
module.exports = modelUser

