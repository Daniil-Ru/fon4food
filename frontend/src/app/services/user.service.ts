import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export const ROLES = {
  VENDOR: 'ROLE_USER',
  DELIVERY_PERSON: 'delivery-person',
};


@Injectable({
  providedIn: 'root',
})
export class UserService {
  role$ = new BehaviorSubject<string>('');

  constructor() {
  }

  updateRole(newRole: string) {
    this.role$.next(newRole);
  }
}
