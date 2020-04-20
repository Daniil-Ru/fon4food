import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function hasSpecialCharactersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value.match(/^[A-Za-z0-9]*$/)) {
      return { specialCharacters: { value: true } };
    }

    return null;
  };
}
