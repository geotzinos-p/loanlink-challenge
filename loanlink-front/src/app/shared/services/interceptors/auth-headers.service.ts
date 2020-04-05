import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token');
    const authReq = request.clone({ setHeaders: { Authorization: 'Bearer ' + authToken, 'accept-language': '*' } });
    return next.handle(authReq);
  }
}
