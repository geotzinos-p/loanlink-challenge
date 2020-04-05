import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThermostatComponent } from './create-thermostat.component';

describe('CreateThermostatComponent', () => {
  let component: CreateThermostatComponent;
  let fixture: ComponentFixture<CreateThermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateThermostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
