import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function hasNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value.match(/\d/)) {
      return { numbers: { value: true } };
    }

    return null;
  };
}
