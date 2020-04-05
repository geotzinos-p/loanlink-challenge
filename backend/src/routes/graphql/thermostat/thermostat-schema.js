const {buildSchema} = require('graphql');

module.exports = buildSchema(`
    type ThermostatReading {
        _id: String!
        thermostat_id: String!
        temperature: Float!
        humidity: Float!
        battery_charge: Float!
    }
    type ThermostatLocation {
        latitude: Float!
        longitude: Float!
    }
    type Thermostat {
        _id: String!
        household_token: String!
        location: ThermostatLocation!
    }
    type RootQuery {
        thermostat(thermostatId: String!): Thermostat!
        allThermostats(skip: Int): [Thermostat!]!
        thermostatReading(thermostatId: String, page: Int): [ThermostatReading]!
    }
    schema {
        query: RootQuery
    }
`);