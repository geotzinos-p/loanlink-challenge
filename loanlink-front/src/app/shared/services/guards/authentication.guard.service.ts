import { AuthenticationService } from './../authentication/authentication.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuardService implements CanActivate {

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (state.url === '/login') {
      if (this._authenticationService.isAuthenticated) {
        this._router.navigate(['/thermostats']);
        return false;
      }
      return true;
    } else {
      if (!this._authenticationService.isAuthenticated) {
        this._router.navigate(['/login']);
        return false;
      }
      return true;
    }
  }

}
