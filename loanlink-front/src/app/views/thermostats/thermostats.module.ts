import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThermostatsComponent } from './thermostats.component';
import { SharedModule } from '@shared/shared.module';
import { ThermostatModule } from '@shared/components/presentational/thermostat/thermostat.module';
import { SelectedThermostatModule } from '@shared/components/presentational/selected-thermostat/selected-thermostat.module';
import { ManagerGuardService } from '@shared/services/guards/manager.guard.service';

const routes: Routes = [
  { path: '', component: ThermostatsComponent },
  { path: 'create-thermostat', loadChildren: () => import('./create-thermostat/create-thermostat.module').then(m => m.CreateThermostatModule), canActivate: [ManagerGuardService] },
  { path: '**', redirectTo: 'thermostats' }
];

@NgModule({
  declarations: [ThermostatsComponent],
  imports: [
    CommonModule,
    SharedModule,
    SelectedThermostatModule,
    ThermostatModule,
    RouterModule.forChild(routes)
  ]
})
export class ThermostatsViewModule {}
