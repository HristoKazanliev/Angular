import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from '../services/notification/notification';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      let message = 'Something went wrong. Please try again.';

       switch (err.status) {
        case 400:
          message = err.error?.message || 'Bad request.';
          break;
        case 401:
          message = 'You are not authorised. Please log in.';
          break;
        case 403:
          message = 'You do not have permission to do that.';
          break;
        case 404:
          message = 'Resource not found.';
          break;
        case 409:
          message = err.error?.message || 'Conflict error.';
          break;
        case 500:
          message = 'Server error. Please try again later.';
          break;
      }

      notificationService.showError(message);
      return throwError(() => err);
    })
  );
};
