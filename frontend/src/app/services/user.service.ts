import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import {UserInfo} from './user.service.model';

export const ROLES = {
  VENDOR: 'VENDOR',
  SUPPLIER: 'SUPPLIER',
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  roles$ = new BehaviorSubject<string[]>(null);
  userName$ = new BehaviorSubject<string>('');

  constructor() {
  }

  reset() {
    this.roles$.next([]);
    this.userName$.next('');
  }

  update(userInfo: UserInfo) {
    if (userInfo == null) {
      this.reset();
    } else {
      this.roles$.next(userInfo.roles);
      this.userName$.next(userInfo.username);
    }
  }
}
