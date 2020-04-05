const { Router } = require('express');

const { ThermostatController } = require('../controllers/thermostat');
const {checkToken} = require('../middleware/authentication');

const thermostatRouter = Router();
const thermostatController = new ThermostatController();

thermostatRouter.get('/all', checkToken, thermostatController.getAll);
thermostatRouter.get('/:id', checkToken, thermostatController.getById);

module.exports = {
  thermostatRouter
};

module.exports = {
  hello() {
      return {
          text: "Hello world",
          views: 12
      }
  }
}