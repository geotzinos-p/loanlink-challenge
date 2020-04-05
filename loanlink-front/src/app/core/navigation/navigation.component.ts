import { SubSink } from 'subsink';
import { AuthenticationService } from '@shared/services/authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  collapse: boolean = true;
  isAuthenticated: boolean = false;
  private _subs = new SubSink();

  constructor(private authenticationService: AuthenticationService,
    private _router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.authenticationService.isAuthenticated;
    this._subs.add(this.authenticationService.authenticationChanged.subscribe(changed => {
      this.isAuthenticated = changed;
    }))
  }
  changeNavStatus() {
    this.collapse = !this.collapse;
  }

  logout() {
    this.authenticationService.logOut();
    this._router.navigate(['/login']);
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
