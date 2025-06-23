import {Directive, ElementRef, inject, signal} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
    standalone: true,
    host: {
        // (click)="onClick($event)"
        '(click)': 'onClick($event)',
        // [style.boxShadow]="shadow()"
        '[style.boxShadow]': 'shadow()',
    },
})
export class InsertShadowDirective {
    private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    private readonly shadow = signal('');

    constructor() {
        // eslint-disable-next-line no-console
        console.log(this.element.getClientRects());
        // eslint-disable-next-line no-console
        console.log(this.element.style.boxShadow);
        setTimeout(() => {
            // eslint-disable-next-line no-console
            console.log(this.element, this.element.style.boxShadow);
        }, 2000);
    }

    onClick(event: PointerEvent) {
        this.shadow.update(currentShadow => (currentShadow ? '' : '0 0 10px #000'));
        // eslint-disable-next-line no-console
        console.log('Clicked', event);
    }
}
