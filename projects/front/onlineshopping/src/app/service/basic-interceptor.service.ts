import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicInterceptorService implements HttpInterceptor {

  
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username: string = 'yusuf';
    let password: string = '1234';
    let basicAuthHeaderString: string = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone(

      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }


      }

    );
    return next.handle(request);
  }

  constructor() { }
}
