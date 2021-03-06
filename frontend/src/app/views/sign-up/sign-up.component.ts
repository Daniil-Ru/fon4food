import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AlertType } from '../../components/alert/alert.model';
import { ROLES } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'f4f-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  success = false;
  error = false;

  readonly AlertType = AlertType;

  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    company: '',
    address: ['', Validators.required],
    zipCode: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    city: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    role: ['', Validators.required],
    acceptedPrivacy: [false, Validators.requiredTrue],
  });

  readonly rolesKeys = Object.keys(ROLES);

  privacyPolicy = '';

  constructor(readonly formBuilder: FormBuilder, readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`assets/legal/privacy-policy.html`, {responseType: 'text'})
      .subscribe(content => {
        this.privacyPolicy = content;
      });
  }

  signUp() {
    this.error = false;

    this.http.post(
      `${environment.backend_url}/signup`,
      {...this.signUpForm.value, privacyPolicyBase64: btoa(this.privacyPolicy)}
      )
    .subscribe(() => {
      this.success = true;
      window.scroll(0, 0);
    },
    () => {
      this.error = true;
    });
  }

}
