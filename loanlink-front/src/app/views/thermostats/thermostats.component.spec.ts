import { IThermostatDto } from '@shared/services/thermostat/thermostat.interface';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThermostatsViewModule } from './thermostats.module';
import { ThermostatsComponent } from './thermostats.component';
import { CoreModule } from '@core/core.module';
import { of } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ScreenSizeService } from '@shared/services/window/screen-size.service';
import { httpInterceptProviders } from '@shared/services/interceptors';

describe('ThermostatsComponent', () => {
  let component: ThermostatsComponent;
  let fixture: ComponentFixture<ThermostatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, ThermostatsViewModule],
      providers: [httpInterceptProviders, ScreenSizeService, DeviceDetectorService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should set correct meta', () => {
    fixture.detectChanges();
    expect(component.meta.getTag('name="description"').content).toEqual(
      'Thermostats page'
    );
  });
});
