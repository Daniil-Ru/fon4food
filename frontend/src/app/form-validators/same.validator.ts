import { FormGroup, ValidatorFn } from '@angular/forms';

export function sameValidator(): ValidatorFn {
  return (group: FormGroup): { [key: string]: any } | null => {
    const controlsNames = Object.keys(group.controls);

    const first = group.controls[controlsNames[0]].value;
    const second = group.controls[controlsNames[1]].value;

    if (first !== second) {
      return { same: { value: true } };
    }

    return null;
  };
}
