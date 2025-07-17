import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    effect,
    inject,
    input,
} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CounterInputComponent} from '../../../../shared/counter-input/counter-input.component';
import {isStringValidator} from './validators/is-string.validator';

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
        ReactiveFormsModule,
    ],
})
export class FilterComponent {
    private readonly changeDetectorRef = inject(ChangeDetectorRef);

    brands = input<string[] | null>(null);

    // readonly minControl = new FormControl(1);

    form = new FormGroup({
        name: new FormControl('', {
            validators: [isStringValidator, Validators.required, Validators.minLength(3)],
            asyncValidators: [],
        }),
        brands: new FormArray<FormControl<boolean>>([]),
        priceRange: new FormGroup({
            min: new FormControl(0),
            max: new FormControl(999999),
        }),
    });

    get hasBrandsControls(): boolean {
        return Boolean(this.form.get('brands')?.value?.length);
    }

    constructor() {
        // this.form.get('name')?.setValidators();
        // this.form.setValue({}, {emitEvent: false});
        // this.form.updateValueAndValidity();
        // this.minControl.setValue(5);
        // this.minControl.disable();
        // this.minControl.enable();

        // this.minControl.valueChanges.subscribe(value => {
        //     console.log('valueChanges', value);
        // });
        this.listenBrandsChange();

        this.form.valueChanges.subscribe(value => {
            // eslint-disable-next-line no-console
            console.log('valueChanges', value);
        });
    }

    private listenBrandsChange() {
        effect(() => {
            const brandsControls = this.brands()?.map(() => new FormControl(false)) || [];
            const brandsForm = new FormArray(brandsControls as Array<FormControl<boolean>>);

            this.form.setControl('brands', brandsForm);

            this.changeDetectorRef.markForCheck();
        });
    }
}
