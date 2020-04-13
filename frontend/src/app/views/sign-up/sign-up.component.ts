import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMailBulk, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'f4f-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  phone: string;
  email: string;
  acceptedPrivacy: boolean;

  faUser = faUser;
  faEmail = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }

  signUp() {

  }

}
