import { Injectable } from '@angular/core';

export const ROLES = {
  VENDOR: 'vendor',
  DELIVERY_PERSON: 'delivery-person',
};


@Injectable({
  providedIn: 'root',
})
export class UserService {
  role = '';

  constructor() {
  }
}
