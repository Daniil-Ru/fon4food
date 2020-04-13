import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'f4f-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    acceptedPrivacy: [false, Validators.requiredTrue],
  });

  // vendorForm = this.formBuilder.group({
  //   name: ['', Validators.required],
  //   address: ['', Validators.required],
  //   zipCode: ['', Validators.required, Validators.minLength(5), Validators.maxLength(5)],
  //   city: ['', Validators.required],
  // });

  constructor(readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  signUp() {

  }

}
