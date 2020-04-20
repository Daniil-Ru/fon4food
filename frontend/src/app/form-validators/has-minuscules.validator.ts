import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function hasMinusculesValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value.match(/[a-z]/)) {
      return { minuscules: { value: true } };
    }

    return null;
  };
}
