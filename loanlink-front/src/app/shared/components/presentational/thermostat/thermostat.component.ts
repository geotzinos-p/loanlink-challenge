import { IThermostatDto } from './../../../services/thermostat/thermostat.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  templateUrl: './thermostat.component.html',
  styleUrls: ['./thermostat.component.scss']
})
export class ThermostatComponent {
  @Input() thermostat: IThermostatDto;
}
