const fetch = require('node-fetch')
const Etudiants = require('../models/etudiantsSchema');
const DcUser = require('../models/dcUserSchema');
const GhUser = require('../models/ghUserSchema');



exports.saveAllEtudiants = async (req, res, next) => {

    const etudiants = req.body.etudiants;
    let digiUsers = [];


    try {

        fetch('https://app.digiforma.com/api/v1/graphiql', {
            method: 'POST',
            headers: {
                Authorization: "Bearer " + process.env.accessToken,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: 
                `query{
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
                  }`
            }),
        })
            .then((data) => data.json())

            .then(data => {
                const datos = data.data.trainees
                // date = JSON.parse(datos);
                // console.log(datos);

                datos.forEach(user => {

                    let userDf = {

                        id: user.id,
                        lastname: user.lastname,
                        firstname: user.firstname,
                        email: user.email,
                        phone: user.phone,
                        lastDiploma: user.lastDiploma,
                        roadAddress: user.roadAddress,
                        cityCode: user.cityCode,
                        city: user.city,
                        civility: user.civility,
                        nationality: user.nationality,
                        birthdate: user.birthdate,
                        handicaped: user.handicaped,
                        trainingSessions: user.trainingSessions,
                    }
                    digiUsers.push(userDf);
                });

                Etudiants.insertMany(digiUsers)
                res.send(digiUsers)
            })
            

    } catch (error) {
        res.send({
            status:false,
            msg: error
        })

    }

}

exports.getEtudiants = async ( req, res, next ) => {
    try {
        const etudiants = await Etudiants.find({});
        res.json(etudiants);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.updateEtudiant = async ( req, res, next ) => {

    let body = req.body;
    const idDc = body.dc;
    const userGh = body.gh;
    const etu = body._id;
    // console.log(body)
 

    try {

        // const dcUser = await DcUser.findById(idDc);
        // console.log(dcUser)
        // const ghUser = await GhUser.findById(userGh);
        // console.log(ghUser)

        
        const etudiant = await Etudiants.findByIdAndUpdate( etu, { ghUser:userGh, dcUser:idDc  } );

        console.log(etudiant)

       await res.json({
        ok:true,
        msg:"student updated"
       });
        // next();
        
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.getEtudiant = async ( req, res, next ) => {
    let body = req.body;
    const etu = body._id;
    
    console.log(body);
    
    try {

        const etudiant = await Etudiants.findById(etu).populate("dcUser").populate("ghUser");
        // // console.log(req.query);
        res.json(etudiant);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.getEtudiantById = async ( req, res, next ) => {
    // let body = req.body;
    const etu = req.params;
    
    console.log(etu);
    
    try {

        const etudiant = await Etudiants.findOne(etu).populate("dcUser").populate("ghUser");
        // // console.log(req.query);
        res.json(etudiant);
        
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.getEtudiantByFirstname = async ( req, res, next ) => {

    const etu = req.params;
    console.log(etu);

    try {

        const etudiant = await Etudiants.find(  etu  ).populate("dcUser").populate("ghUser");

        if(etudiant.length == 0) {
            res.json(`L'élève ${etu.firstname} n'existe pas`)
        }else {

            res.json(etudiant);
        }

        
    } catch (error) {
        console.log(error);
        next();
    }
}
exports.getEtudiantByLastname = async ( req, res, next ) => {

    const etu = req.params;
    console.log(etu);

    try {

        const etudiant = await Etudiants.find(  etu  ).populate("dcUser").populate("ghUser");

        if(etudiant.length == 0) {
            res.json(`L'élève ${etu.lastname} n'existe pas`)
        }else {

            res.json(etudiant);
        }

        
    } catch (error) {
        console.log(error);
        next();
    }
}



