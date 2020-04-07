import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PATHS } from '../../app-routing.model';
import { ROLES, UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class StartGuard implements CanActivate {
  constructor(readonly user: UserService, readonly router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.user.roles$
      .pipe(
        filter(roles => roles != null),
        map(roles => {
          if (roles.length > 0) {
            return true;
          } else {
            this.router.navigate([PATHS.ABOUT]);
            return false;
          }
        }),
      );
  }
}
