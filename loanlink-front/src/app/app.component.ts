import { AuthenticationService } from '@shared/services/authentication/authentication.service';
import { ScreenSizeService } from './shared/services/window/screen-size.service';
import { Component, ChangeDetectionStrategy, OnInit, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private screenSizeService: ScreenSizeService, private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this._authenticationService.loadUserFromLocalStorage();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenSizeService.windowResized();
  }

}
