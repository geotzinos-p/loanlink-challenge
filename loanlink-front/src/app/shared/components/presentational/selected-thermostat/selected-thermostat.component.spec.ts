import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedThermostatComponent } from './selected-thermostat.component';
import { CommonModule } from '@angular/common';

describe('SelectedThermostatComponent', () => {
  let component: SelectedThermostatComponent;
  let fixture: ComponentFixture<SelectedThermostatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ SelectedThermostatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedThermostatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
