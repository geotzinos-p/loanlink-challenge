import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IThermostatDto, IThermostatReadingDto } from './thermostat.interface';
import { GraphQlApi } from '../api/graphql-api.service';

@Injectable({
  providedIn: 'root'
})
export class ThermostatsService {

  constructor(public http: HttpClient, private graphQlApi: GraphQlApi) {}

  getThermostats(skip: number = 0): Observable<IThermostatDto[]> {
    return this.graphQlApi.postQuery(`{
      allThermostats(skip:${skip}){
        _id
        household_token
        location {
          latitude
          longitude
        }
      }
    }`, true);
  }

  getThermostat(thermostatId: string): Observable<IThermostatDto[]> {
    return this.graphQlApi.postQuery(`{
      thermostat(thermostatId:\"${thermostatId}\"){
        _id
        household_token
        location {
          latitude
          longitude
        }
      }
    }`, true);
  }

  getThermostatReading(thermostatId: string): Observable<IThermostatReadingDto[]> {
    return this.graphQlApi.postQuery(`{
      thermostatReading(thermostatId:\"${thermostatId}\"){
        _id
        thermostat_id
        temperature
        humidity
        battery_charge
      }
    }`, true);
  }
}
