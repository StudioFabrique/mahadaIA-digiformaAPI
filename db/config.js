const mongoose = require("mongoose");

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.MDB),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
        console.log('DB_ON');

    }catch(error){
        console.log(error);
        throw new Error('Error to start db');
    }
}

module.exports = {
    dbConnection
}