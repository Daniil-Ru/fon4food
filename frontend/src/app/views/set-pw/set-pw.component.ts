import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertType } from 'src/app/components/alert/alert.model';
import { PATHS } from '../../app-routing.model';
import { hasMajusculesValidator } from '../../form-validators/has-majuscules.validator';
import { hasMinusculesValidator } from '../../form-validators/has-minuscules.validator';
import { hasNumbersValidator } from '../../form-validators/has-numbers.validator';
import { hasSpecialCharactersValidator } from '../../form-validators/has-special-characters.validator';
import { sameValidator } from '../../form-validators/same.validator';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ValidityResponse} from './set-pw.model';

@Component({
  selector: 'f4f-set-pw',
  templateUrl: './set-pw.component.html',
  styleUrls: ['./set-pw.component.scss'],
})
export class SetPwComponent implements OnInit {
  tokenError = false;
  error = false;
  
  private token = '';

  readonly AlertType = AlertType;

  setPwForm = this.formBuilder.group({
      password1: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
        hasNumbersValidator(),
        hasMajusculesValidator(),
        hasMinusculesValidator(),
        hasSpecialCharactersValidator(),
      ]],
      password2: ['', [Validators.required]],
    },
    { validators: sameValidator() },
  );

  constructor(readonly formBuilder: FormBuilder,
              readonly router: Router,
              readonly http: HttpClient,
              readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.token = this.activatedRoute.snapshot.paramMap.get('token');

    this.http.get(`${environment.backend_url}/token/check-validity/${this.token}`)
      .subscribe((response: ValidityResponse) => {
        this.tokenError = !response.tokenIsValid;
      }, () => {
        this.tokenError = true;
      });
  }

  sendPw() {
    this.error = false;

    this.http.post(`${environment.backend_url}/signup/activate`, {
      token: this.token,
      password: btoa(this.setPwForm.value.password1)
    })
    .subscribe(() => {
      this.router.navigate([PATHS.LOGIN]);
    }, () => {
      this.error = true;
    });
  }

}
