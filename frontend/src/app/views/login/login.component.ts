import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROLES, UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name = '';
  password = '';

  existError = false;

  constructor(readonly router: Router, readonly user: UserService) {
  }

  signIn() {
    // TODO
    if (this.name === 'anton') {
      this.existError = false;
      this.user.role = ROLES.VENDOR;
      this.router.navigate(['/vendor']);
    } else if (this.name === 'lisa') {
      this.existError = false;
      this.user.role = ROLES.DELIVERY_PERSON;
      this.router.navigate(['/delivery']);
    } else {
      this.existError = true;
    }
  }
}
