
const express = require('express');
const { dbConnection } = require('./db/config');
const routes = require('./routes/routes');
const cors = require('cors');

const path = require('path')
const publicPath = path.resolve(__dirname, 'public')
require('dotenv').config();

dbConnection();

const app = express();
app.use( express.json());
app.use( cors() );
app.use( express.urlencoded({extended:true}));
app.use(express.static(publicPath));
app.use('/', routes());
app.listen(process.env.PORT, () => {
    console.log(`server on port ${ process.env.PORT }`)
});



const accessToken = "";
const endpoint = "https://app.digiforma.com/api/v1/graphiql";
const query = `query {
                    trainees{
            id
            lastname
            firstname
            trainingSessions {
              name
              abandons {
                abandonStartDate
                abandonEndDate
                isJustified
                commentJustifiedAbsence
              }
            }
            nationality
            birthdate
            email
            roadAddress
            phone
            lastDiploma
            status
            handicaped
          }
          
        }`;

