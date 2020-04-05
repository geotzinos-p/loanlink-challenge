import { RouterModule } from '@angular/router';
import { ScreenSizeService } from './shared/services/window/screen-size.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@core/core.module';
import { httpInterceptProviders } from './shared/services/interceptors';
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DeviceDetectorModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptProviders, ScreenSizeService, DeviceDetectorService]
})
export class AppModule {}
