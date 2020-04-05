
// connection.js
const mongoose = require("mongoose");

class Database {
    static connection = process.env.MONGODB_URL;

    static connect() {
        return mongoose.connect(this.connection);
    };
}

module.exports = {Database};