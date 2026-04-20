import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (token && !req.url.includes('/auth/login')) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` // Django SimpleJWT
      }
    });
    return next(clonedReq);
  }

  return next(req);
};
