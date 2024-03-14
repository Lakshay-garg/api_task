import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSYXZpIiwiYXVkIjoiNzAiLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiZGVmYXVsdGxvZ2luYnJhbmNoIjoxLCJpc3MiOiJzeXN0ZW0iLCJpYXQiOjE3MTAzOTY4MzAsImV4cCI6MTcxMDQyNTYzMH0.KkYm7oS38vpu34dBGOtmIUGdKUaRIXEgTzQWYep7QLo'
    return next.handle(request.clone({ setHeaders: { authorization: `Bearer ${jwt}`,moduleId:'112'  } 
  }));
  
  }
}
