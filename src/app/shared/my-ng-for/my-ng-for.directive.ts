import {Directive, effect, inject, input, TemplateRef, ViewContainerRef} from '@angular/core';

type MyNgForContext = {
    $implicit: unknown;
    index: number;
    appMyNgForOf: unknown[];
};

@Directive({
    selector: '[appMyNgFor]',
    standalone: true,
})
export class MyNgForDirective {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<MyNgForContext>>(TemplateRef);

    readonly appMyNgForOf = input<unknown[] | null>();

    constructor() {
        effect(() => {
            const items = this.appMyNgForOf();

            this.viewContainerRef.clear();

            if (!items) {
                return;
            }

            items.forEach((item, index) => {
                this.viewContainerRef.createEmbeddedView(this.templateRef, {
                    $implicit: item,
                    index,
                    appMyNgForOf: items,
                });
            });
        });
    }
}
