import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/User/user';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
