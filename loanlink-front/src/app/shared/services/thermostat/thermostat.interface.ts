export interface IThermostatDto {
  _id: string;
  household_token: string;
  location: IThermostatLocation;
}

export interface IThermostatLocation {
  latitude: number;
  longitude: number;
}

export interface IThermostatReadingDto {
  _id: string;
  thermostat_id: string;
  temperature: number;
  humidity: number;
  battery_charge: number;
}
