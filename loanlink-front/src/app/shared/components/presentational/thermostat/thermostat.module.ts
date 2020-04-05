import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThermostatComponent } from './thermostat.component';

@NgModule({
  declarations: [ThermostatComponent],
  imports: [CommonModule],
  exports: [ThermostatComponent]
})
export class ThermostatModule {}
