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
        let status = '';

        console.log(`[${request.urlWithParams}] [${request.method}] : DEBUT`);

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
                finalize( () => {
                    const elapsedTime = Date.now() - startTime;
                    console.log(`[${request.urlWithParams}] [${request.method}] : FIN => ${elapsedTime} ms (${status})`);
                })
            );
    }
}
