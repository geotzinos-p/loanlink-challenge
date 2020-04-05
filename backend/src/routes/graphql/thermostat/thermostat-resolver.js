async function thermostat({thermostatId}) {
    return {
        _id: "123",
        household_token: "132",
        location: {"longitude":123, "latitude": 123}
    }
}

async function allThermostats(skip) {
    return [
        {
            _id: "123",
            household_token: "132",
            location: {"longitude":123, "latitude": 123}
        }
    ]
}

async function thermostatReading({thermostatId, page}) {
    return [
        {
            _id: "123",
            thermostat_id: "132",
            temperature: 32,
            humidity: 32,
            battery_charge: 23
        }
    ]
}

module.exports = {
    thermostat,
    allThermostats,
    thermostatReading
}