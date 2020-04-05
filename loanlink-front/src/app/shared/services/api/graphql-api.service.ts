import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphQlApiResponse } from './graphql-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GraphQlApi {
  private readonly graphqlUrl = 'graphql';

  constructor(private http: HttpClient) {}

  /**
   * Sends an http post request to the graphql api
   * @param params Http post body
   */
  postQuery(params, extractData: boolean = false): any {
    return this.http.post<any>(environment.url + this.graphqlUrl, {query: params}).pipe(map((row: GraphQlApiResponse) => {
      let results = row;
      if (row.data) {
        results = row.data;
      }

      if (results && extractData) {
        const keys = Object.keys(results);
        if (keys.length === 1) {
          const key = keys[0];
          results = results[key];
        }
      }

      return results;
    }));
  }

}
