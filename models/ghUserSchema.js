const { Schema, model } = require('mongoose');



const userGithubSchema = new Schema({
    idGh: { type: String, required: true, unique: true},
    nomGh: { type: String, required: true },
    avatarGh: { type: String },
    urlProfilGh: { type: String },
    urlReposGh: { type: String },
    repos: { type: Number },
    reposId: { type: Object },
    createdAt: { type: String },
    eventsRef: [{ type: Schema.Types.ObjectId, ref: 'ghEvents' }],
    reposRef:[{ type: Schema.Types.ObjectId, ref: 'ghRepos' }]

    
});

module.exports = model('ghUser', userGithubSchema);