import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '@core/navigation/navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [NavigationComponent]
})
export class CoreModule {}
