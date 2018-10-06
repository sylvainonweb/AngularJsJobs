import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const startTime = Date.now();
        var status: string = "";

        return next.handle(request)
            .pipe(
                tap(
                    event => {
                      status = '';
                      if (event instanceof HttpResponse) {
                        status = 'OK';
                      }
                    },
                    error => status = 'KO'
                  ),                
                finalize( () => 
                {
                    const elapsedTime = Date.now() - startTime;
                    console.log("[CLIENT] [" + request.urlWithParams + "] [" + request.method + "] : " + elapsedTime + " ms (" + status + ")");
                })
            );
    }
}