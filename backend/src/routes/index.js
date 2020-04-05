const { authenticationRouter } = require("./auth")
const { thermostatRouter } = require("./thermostat");

module.exports = {
    authenticationRouter,
    thermostatRouter
}