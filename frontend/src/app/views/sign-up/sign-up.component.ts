import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCheckCircle, faClock, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ROLES } from '../../services/user.service';

@Component({
  selector: 'f4f-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  success = false;
  error = false;

  readonly faSuccess = faCheckCircle;
  readonly faError = faTimesCircle;

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

  constructor(readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  signUp() {
    this.success = true;
    window.scroll(0,0);
    // this.error = true;
  }

}
