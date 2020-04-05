import { GenericJsonResponse } from '@shared/services/authentication/authentication-interfaces.service';
import { AuthenticationService } from '@shared/services/authentication/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {SubSink} from 'subsink';
import { Router } from '@angular/router';
import { ToasterService } from '@shared/services/notifications/toaster.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private _subs = new SubSink();
  loginForm: FormGroup;

  constructor(private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private toastr: ToasterService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  login(): void {
    this._subs.add(this._authenticationService.login(this.loginForm.value)
    .pipe(catchError(error => {
      this.toastr.error("Error", "Invalid username or password");
      return error;
    }))
    .subscribe((result: GenericJsonResponse) => {
      if (result && result.success) {
        this._router.navigate(['/home']);
      }
    }));
  }

  ngOnDestroy() {
    this._subs.unsubscribe();
  }
}
