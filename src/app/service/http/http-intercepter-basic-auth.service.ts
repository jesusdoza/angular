import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {
  constructor(private authService: BasicAthenticationService) {}

  //middle ware request object recieved
  //next is invoked with updated request
  //adding basic authentication header to request
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const basicAuthHeaderString = this.authService.getAuthenticatedToken();
    const username = this.authService.getAuthenticatedUser();

    // console.log('http-intercepter auth header', basicAuthHeaderString);
    // console.log('http-intercepter username', username);

    //cloning b/c request cannot be modified
    if (username && basicAuthHeaderString) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }
    // console.log('request is', request);

    return next.handle(request);
  }
}
