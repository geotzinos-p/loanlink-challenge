import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap,catchError } from 'rxjs/operators';
import { GraphQLJsonResponse } from './authentication-interfaces.service';
import { Subject } from 'rxjs';

type USER_TYPES = 'MANAGER' | 'OWNER';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  authenticationChanged: Subject<boolean> = new Subject<boolean>();
  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
    this.authenticationChanged.next(value);
  }

  get userType(): USER_TYPES {
    return this._userType;
  }
  set userType(value: USER_TYPES) {
    this._userType = value;
  }

  private _isAuthenticated: boolean = false;
  private _userType: USER_TYPES;

  constructor(private _httpClient: HttpClient) { }

  loadUserFromLocalStorage() {
    this.isAuthenticated = localStorage.getItem('token') !== null;
    this.userType = localStorage.getItem('userType') !== 'MANAGER' ? 'OWNER' : 'MANAGER';
  }

  public login(credentials: {username: string, password: string}) {
    return this._httpClient.post(environment.url + 'auth/login', credentials)
      .pipe(tap((response: GraphQLJsonResponse) => {
        if (response && response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userType', response.data.userType);
          this.loadUserFromLocalStorage();
          this.isAuthenticated = true;
        }
      }));
  }

  public logOut() {
    localStorage.clear();
    this.isAuthenticated = false;
  }
}
