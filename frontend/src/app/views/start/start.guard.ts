import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ROLES, UserService } from '../../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class StartGuard implements CanActivate {
  constructor(readonly user: UserService, readonly router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.user.roles$.getValue().length > 0) {
      return true;
    }

    this.router.navigate(['']);
    return false;
  }

}
