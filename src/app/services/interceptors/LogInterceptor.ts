import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const startTime = Date.now();

        return next.handle(request)
            .pipe(
                finalize( () => 
                {
                    const elapsedTime = Date.now() - startTime;
                    console.log("[" + request.urlWithParams + " - " + request.method + "] : " + elapsedTime + " ms");
                })
            );
    }
}