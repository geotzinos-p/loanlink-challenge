const { Router } = require('express');

const { AuthenticationController } = require('../controllers/authentication');

const authenticationRouter = Router();
const authController = new AuthenticationController();

authenticationRouter.post('/login', authController.login);

module.exports = {
    authenticationRouter
};