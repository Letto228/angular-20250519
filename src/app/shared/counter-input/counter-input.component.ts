import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, input, signal} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule, MatIconModule, MatButtonModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    readonly step = input(1);

    readonly isDisabled = signal(false);
    readonly counter = signal(0);

    writeValue(value: number): void {
        // eslint-disable-next-line no-console
        console.log('writeValue', value);
        this.counter.set(value);
    }

    registerOnChange(onChange: (newValue: number) => void): void {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void): void {
        this.onTouched = onTouched;
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled.set(isDisabled);
    }

    back() {
        this.counter.update(counter => counter - this.step());

        // eslint-disable-next-line no-console
        console.log('back onChange', this.counter());
        this.onChange(this.counter());
        this.onTouched();
    }

    next() {
        this.counter.update(counter => counter + this.step());

        // eslint-disable-next-line no-console
        console.log('next onChange', this.counter());
        this.onChange(this.counter());
        this.onTouched();
    }

    private onChange: (newValue: number) => void = () => {
        throw new Error(
            'Функция onChange не была установлена, значение в механизм Angular form не было передано',
        );
    };

    private onTouched: () => void = () => {
        throw new Error(
            'Функция onTouched не была установлена, механизм Angular form не получил состояние тронутости',
        );
    };
}
