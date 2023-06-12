import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { HardcodedAthenticationService } from '../service/hardcoded-athentication.service';

export const routeGuard: CanActivateFn = (route, state) => {
  const routeGuardService = new HardcodedAthenticationService();
  const router = new Router();
  const result = routeGuardService.isUserLoggedIn();

  if (result) {
    return true;
  }

  return router.parseUrl('/login');
};
