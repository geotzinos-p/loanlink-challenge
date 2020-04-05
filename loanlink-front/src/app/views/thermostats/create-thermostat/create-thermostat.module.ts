import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateThermostatComponent } from './create-thermostat.component';


const routes: Routes = [
  { path: '', component: CreateThermostatComponent }
];

@NgModule({
  declarations: [CreateThermostatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateThermostatModule { }
