import { IThermostatReadingDto } from './../../../services/thermostat/thermostat.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selected-thermostat',
  templateUrl: './selected-thermostat.component.html',
  styleUrls: ['./selected-thermostat.component.scss']
})
export class SelectedThermostatComponent {
  @Input() thermostatReading: IThermostatReadingDto[];
  constructor() { }

  trackByF(index: number, item: IThermostatReadingDto) {
    return item._id;
  }
}
