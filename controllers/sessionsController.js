const fetch = require('node-fetch')
const Etudiants = require('../models/etudiantsSchema');
const FormationsComplete = require('../models/formationSchemaResume');
const FormationsResume = require('../models/formationSchemaResume');
const DcUser = require('../models/dcUserSchema');
const GhUser = require('../models/ghUserSchema');



exports.saveAllFormationsComplete = async (req, res, next) => {

    const formations = req.body.formations;
    let formationsArray = [];


    try {

        fetch('https://app.digiforma.com/api/v1/graphiql', {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + process.env.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query{


                    trainees{
                      id
                      lastname
                      firstname
                      email
                      phone
                      lastDiploma
                      roadAddress
                      cityCode
                      city
                      civility
                      nationality
                      birthdate
                      status
                      handicaped
                      trainingSessions{
                        name
                      }
                      
                    }
                  }
                
                `
            }),
        })
            .then((data) => data.json())

            .then(data => {
                const datos = data.data.trainees
                // date = JSON.parse(datos);
                // console.log(datos);

                datos.forEach(user => {

                    let formations = {

                        id: user.id,
                        Nom: user.lastname,
                        Prenom: user.firstname,
                        Nationalite: user.nationality,
                        Telephone: user.phone,
                        email: user.email,
                        Nee: user.birthdate,
                        adresse: user.roadAddress,
                        ville: user.city,
                        codePostal: user.cityCode,
                        civilite: user.civility,
                        status: user.status,
                        handicape: user.handicaped,
                        diplome: user.lastDiploma,
                        formations: user.trainingSessions,
                    }
                    formationsArray.push(formations);
                });

                FormationsComplete.insertMany(formationsArray)
                res.send(formationsArray)
            })


    } catch (error) {
        res.send({
            status: false,
            msg: error
        })

    }

}
exports.saveAllFormationsResume = async (req, res, next) => {

    const formations = req.body.formations;
    let formationsArray = [];


    try {

        fetch('https://app.digiforma.com/api/v1/graphiql', {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + process.env.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `query{

                    trainingSessions{
                      id
                      name
                      startDate
                      endDate
                      trainees{
                        lastname
                        firstname
                      }
                    }
                  
                  }`
            }),
        })
            .then((data) => data.json())

            .then(data => {
                const datos = data.data.trainees
                // date = JSON.parse(datos);
                // console.log(datos);

                datos.forEach(f => {

                    let formation = {
                        id: f.id,
                        name: f.name,
                        startDate: f.startDate,
                        endDate: f.endDate,
                        trainees: f.trainees,
                    }
                    formationsArray.push(formation);
                });

                FormationsResume.insertMany(formationsArray)
                res.send(formationsArray)
            })


    } catch (error) {
        res.send({
            status: false,
            msg: error
        })

    }

}

exports.getFormationsComplete = async (req, res, next) => {
    try {
        const formations = await FormationsComplete.find({});
        res.json(formations);

    } catch (error) {
        console.log(error);
        next();
    }
}
exports.getFormationsResume = async (req, res, next) => {
    try {
        const formations = await FormationsResume.find({});
        res.json(formations);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getFormation = async (req, res, next) => {
    let body = req.body;
    const forma = body.id;

    console.log(forma);

    try {

        const formation = await FormationsComplete.findOne(forma);
        // // console.log(req.query);
        res.json(formation);

    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getFormationById = async (req, res, next) => {
    // let body = req.body;
    const forma = req.params._id;

    console.log(forma);

    try {

        const formation = await FormationsComplete.findById(forma);
        // // console.log(req.query);
        res.json(formation);

    } catch (error) {
        console.log(error);
        next();
    }
}
exports.getFormationByNom = async (req, res, next) => {

    const forma = req.params.Nom;
    console.log(forma);

    try {

        const formation = await FormationsComplete.find({ Nom: { $all: [forma] } });

        res.json(formation);

    } catch (error) {
        console.log(error);
        next();
    }
}