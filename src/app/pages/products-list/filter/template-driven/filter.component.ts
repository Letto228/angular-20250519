import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';
import {CounterInputComponent} from '../../../../shared/counter-input/counter-input.component';
import {IsStringValidatorDirective} from './validators/is-string/is-string.validator.directive';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CommonModule,
        MatInputModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        CounterInputComponent,
        FormsModule,
        IsStringValidatorDirective,
    ],
})
export class FilterComponent {
    brands = input<string[] | null>(null);

    readonly minValue = signal(0);

    onChange(newValue: unknown) {
        // eslint-disable-next-line no-console
        console.log('newValue FilterComponent', newValue);
    }
}
