import { AuthenticationGuardService } from './shared/services/guards/authentication.guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'thermostats', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule), canActivate: [AuthenticationGuardService] },
  { path: 'thermostats', loadChildren: () => import('./views/thermostats/thermostats.module').then(m => m.ThermostatsViewModule), canActivate: [AuthenticationGuardService] },
  { path: '**', redirectTo: 'thermostats' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

