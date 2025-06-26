import {Directive, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    standalone: true,
    host: {
        '[style.boxShadow]': 'shadow()',
        '(click)': 'onClick($event)',
    },
})
export class InsertShadowDirective {
    private readonly shadow = signal('');

    onClick() {
        this.shadow.update(currentShadow => (currentShadow ? '' : '0 0 10px #000'));
    }
}
