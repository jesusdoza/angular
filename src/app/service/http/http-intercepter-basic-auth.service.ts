import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor() {}

  //middle ware request object recieved
  //next is invoked with updated request
  //adding basic authentication header to request
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = 'bob';
    const password = 'bob';
    const basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    //cloning b/c request cannot be modified
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString,
      },
    });

    return next.handle(request);
  }
}
