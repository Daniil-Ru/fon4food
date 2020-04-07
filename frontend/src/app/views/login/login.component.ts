import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../../services/user.service.model';

@Component({
  selector: 'f4f-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  name = '';
  password = '';

  existError = false;
  faUser = faUser;
  faKey = faKey;
  rememberMe = false;

  constructor(readonly router: Router, readonly user: UserService, readonly http: HttpClient) {
  }

  signIn() {
    this.existError = false;

    const formData = new FormData();
    formData.append('remember-me', this.rememberMe + '');
    this.http.post(`${environment.backend_url}/login`, formData, {
      headers: {Authorization: `Basic ${btoa(`${this.name}:${this.password}`)}`}
    })
      .subscribe(
        (data: UserInfo) => {
          this.user.update(data);
          this.router.navigate(['/start']);
        },
        () => {
          this.existError = true;
        });
  }
}
