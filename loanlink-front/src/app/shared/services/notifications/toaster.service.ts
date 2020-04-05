import { Injectable } from '@angular/core';
import {IndividualConfig, ToastrService as NgxToasterService} from 'ngx-toastr';

export interface ToasterInput extends IndividualConfig {
  title: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: NgxToasterService) { }

  success(title: string, message: string) {
    this.toastr.success(message, title);
  }

  error(title: string, message: string) {
    this.toastr.error(message, title);
  }

  warning(title: string, message: string) {
    this.toastr.warning(message, title);
  }

  info(title: string, message: string) {
    this.toastr.info(message, title);
  }
}
