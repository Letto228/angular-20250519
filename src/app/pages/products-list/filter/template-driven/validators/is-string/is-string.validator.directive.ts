import {Directive} from '@angular/core';
import {NG_VALIDATORS, Validator} from '@angular/forms';
import {isStringValidator} from '../../../reactive/validators/is-string.validator';

@Directive({
    selector: '[appIsStringValidator]',
    standalone: true,
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringValidatorDirective,
            // useValue: {
            //     validate(control: AbstractControl): ValidationErrors | null {
            //         return Number(control.value) ? {isString: 'Is string validator error'} : null;
            //     },
            // },
            // useValue: {
            //     validate: isStringValidator,
            // },
        },
    ],
})
export class IsStringValidatorDirective implements Validator {
    // validate(control: AbstractControl): ValidationErrors | null {
    //     return Number(control.value) ? {isString: 'Is string validator error'} : null;
    // }

    readonly validate = isStringValidator;
}
