import { AuthenticationService } from '@shared/services/authentication/authentication.service';
import { IThermostatReadingDto } from './../../shared/services/thermostat/thermostat.interface';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ThermostatsService } from '@shared/services/thermostat/thermostat.service';
import {
  IThermostatDto
} from '@shared/services/thermostat/thermostat.interface';
import { Subscription } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { ScreenSizeService } from '@shared/services/window/screen-size.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-thermostats',
  templateUrl: './thermostats.component.html',
  styleUrls: ['./thermostats.component.scss']
})
export class ThermostatsComponent implements OnInit, OnDestroy {
  thermostats: IThermostatDto[];
  selectedThermostat: IThermostatDto;
  selectedThermostatReading: IThermostatReadingDto[];
  isContentLoaded: boolean;
  isMobile: boolean;
  private _subs = new SubSink();
  isManager: boolean = false;

  constructor(
    public meta: Meta,
    private titleService: Title,
    public thermostatsService: ThermostatsService,
    private changeDetectorRef: ChangeDetectorRef,
    private screenSizeService: ScreenSizeService,
    private authenticationService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.isContentLoaded = false;
    this.meta.updateTag({
      name: 'description',
      content: 'Thermostats page'
    });

    this.isMobile = this.screenSizeService.isMobile();

    this._subs.add(this.thermostatsService
      .getThermostats()
      .subscribe((response: IThermostatDto[]) => {
        const thermostats = response;
        this.thermostats = thermostats;
        this.isContentLoaded = true;
        this.setTitle('Please select a thermostat');
        this.changeDetectorRef.detectChanges();
      }));

    this._subs.add(this.screenSizeService.screenResizeEvent.subscribe((isMobile: boolean) => {
      this.isMobile = isMobile;
    }));

    this.refreshUserType();
    this._subs.add(this.authenticationService.authenticationChanged.subscribe(changed => {
      this.refreshUserType();
    }));
  }

  refreshUserType() {
    this.isManager = this.authenticationService.userType === 'MANAGER';
  }

  setTitle(title: string) {
    this.titleService.setTitle(title);
  }

  selectThermostat(thermostat: IThermostatDto) {
    if (this.selectedThermostat !== undefined && this.selectedThermostat._id === thermostat._id) {
      this.selectedThermostat = undefined;
      this.selectedThermostatReading = undefined;
      this.setTitle('Please select a thermostat');
      this.changeDetectorRef.detectChanges();
      return true;
    }

    return this.loadReading(thermostat);
  }

  loadReading(selectedThermostat: IThermostatDto) {
    const sub = this.thermostatsService.getThermostatReading(selectedThermostat._id).subscribe((reading: IThermostatReadingDto[]) => {
      this.selectedThermostat = {... selectedThermostat};
      this.selectedThermostatReading = [... reading];
      this.setTitle('ID: ' + selectedThermostat._id);
      this.changeDetectorRef.detectChanges();
    });

    this._subs.add(sub);
    return sub;
  }

  trackByF(index, item: IThermostatDto) {
    return item._id;
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
