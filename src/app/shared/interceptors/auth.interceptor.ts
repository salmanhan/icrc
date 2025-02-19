import { HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../auth/services/token.storage.service'
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  //intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

  //  debugger;
  //  let authReq = req;
  //  const token = this.token.getToken();
  //  if (token != null) {
  //    authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
  //  }
  //  return next.handle(authReq);
  //}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.indexOf('auth/login') == -1) {
      request = request.clone({
        withCredentials: true
      });
    }
    return next.handle(request);
  }
}
