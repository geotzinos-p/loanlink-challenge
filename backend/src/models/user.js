const jwt = require('jsonwebtoken');
const APP_SECRET = process.env.APP_SECRET;

class User {
    generateToken(username) {
        let token = jwt.sign({
            username: username
        },
        APP_SECRET, {
            // expiresIn: '24h' // expires in 24 hours
        }
      );
      return token;
    }
}

module.exports = {User};