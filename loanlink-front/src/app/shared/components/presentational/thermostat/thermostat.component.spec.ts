import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThermostatComponent } from './thermostat.component';
import { ThermostatModule } from './thermostat.module';

describe('ThermostatComponent', () => {
  let component: ThermostatComponent;
  let fixture: ComponentFixture<ThermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThermostatModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
