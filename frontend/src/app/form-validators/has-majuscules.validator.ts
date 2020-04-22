import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';

export function hasMajusculesValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value.match(/[A-Z]/)) {
      return { majuscules: { value: true } };
    }

    return null;
  };
}
