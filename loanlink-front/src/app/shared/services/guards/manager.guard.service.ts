import { AuthenticationService } from './../authentication/authentication.service';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable, enableProdMode } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerGuardService implements CanActivate {

  constructor(private _router: Router, private _authenticationService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this._authenticationService.userType === 'MANAGER') {
        return true;
      }

      this._router.navigate(['/thermostats'])
      return false;
  }

}
