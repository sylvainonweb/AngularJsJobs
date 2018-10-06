import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogInterceptor } from './LogInterceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true }
]; 