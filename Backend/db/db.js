const mongoose = require('mongoose');

function connectToDb() {
    // mongoose.connect(process.env.DB_CONNECT, {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // }, () => {
    //     console.log("Connected to MongoDB");
    // }).catch(err => {
    //     console.log("Error connecting to MongoDB:", err);
    //     process.exit(1); // Exit the process if connection fails
    // })

    mongoose.connect(process.env.DB_CONNECT).then(() => {
        console.log("Connected to MongoDB");
    }).catch(err => {
        console.log("Error connecting to MongoDB:", err);
        process.exit(1); // Exit the process if connection fails
    });
}

module.exports = connectToDb;