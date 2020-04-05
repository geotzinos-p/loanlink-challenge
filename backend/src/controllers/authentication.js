const {User} = require('../models/user');
// .env
const MANAGER_USERNAME = process.env.MANAGER_USERNAME;
const MANAGER_PASSWORD = process.env.MANAGER_PASSWORD;

const OWNER_USERNAME = process.env.OWNER_USERNAME;
const OWNER_PASSWORD = process.env.OWNER_PASSWORD;

class AuthenticationController {


    login(req, res) {
        let username = req.body.username;
        let password = req.body.password;

        if (username && password) {
            if (username === MANAGER_USERNAME && password === MANAGER_PASSWORD) {
                const token = new User().generateToken(username);
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    data: {
                        userType: "MANAGER",
                        token
                    }
                });
            } else if (username === OWNER_USERNAME && password === OWNER_PASSWORD) {
                const token = new User().generateToken(username);
                res.json({
                    success: true,
                    message: 'Authentication successful!',
                    data: {
                        userType: "OWNER",
                        token
                    }
                });
            } else {
                res.status(403).json({
                    success: false,
                    message: 'Incorrect username or password'
                });
            }
        } else {
            res.status(400).json({
                success: false,
                message: 'Authentication failed! Please check the request'
            });
        }

    }
}

module.exports = {
    AuthenticationController
};