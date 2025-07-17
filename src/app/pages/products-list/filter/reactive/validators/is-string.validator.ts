import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const isStringValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    return Number(control.value) ? {isString: 'Is string validator error'} : null;
};
