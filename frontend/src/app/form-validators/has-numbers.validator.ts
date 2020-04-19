import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function hasNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value.match(/[0-9]/)) {
      return { numbers: { value: true } };
    }

    return null;
  };
}
