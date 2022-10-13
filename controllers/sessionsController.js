const fetch = require('node-fetch')
const Etudiants = require('../models/etudiantsSchema');
const FormationsComplete = require('../models/formationSchemaComplete');
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

                    trainingSessions{
                         id
                        name
                        startDate
                        endDate
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
                          
                      }
                      abandons{
                                                isJustified
                                          isAbandon
                                          trainee{
                                            lastname
                                            firstname
                                          }
                      }
                    }
                  }
                `
            }),
        })
            .then((data) => data.json())

            .then(data => {
                const datos = data.data.trainingSessions
                // date = JSON.parse(datos);
                // console.log(datos);

                datos.forEach(f => {

                    let formations = {

                        id: f.id,
                        name: f.name,
                        startDate: f.startDate,
                        endDate: f.endDate,
                        trainees: f.trainees,
                        abandons: f.abandons,

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
                const datos = data.data.trainingSessions
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
    let params = req.params;
    // console.log(params)
    const forma = params.id;

    // console.log(forma);

    try {

        const formation = await FormationsComplete.findOne(params);
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