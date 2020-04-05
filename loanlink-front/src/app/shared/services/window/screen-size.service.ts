import { Injectable, EventEmitter } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  screenResizeEvent: EventEmitter<any> = new EventEmitter();

  constructor(public deviceDetector: DeviceDetectorService) {}

  isMobile(): boolean {
    return this.deviceDetector.isMobile();
  }

  windowResized(): boolean {
    this.screenResizeEvent.emit(this.deviceDetector.isMobile());

    return true;
  }
}



