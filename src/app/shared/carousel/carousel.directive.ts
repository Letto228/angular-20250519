import {
    Directive,
    inject,
    ViewContainerRef,
    TemplateRef,
    input,
    signal,
    effect,
} from '@angular/core';

interface IContext<Data> {
    $implicit: Data;
    curIndex: number;
    isFirst: boolean;
    isLast: boolean;
    next: () => void;
    back: () => void;
    moveTo: (index: number) => void;
}

@Directive({
    selector: '[appCarousel]',
    standalone: true,
})
export class CarouselDirective<Data> {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<IContext<Data>>>(TemplateRef);

    private readonly curIndex = signal<number>(0);

    readonly appCarouselOf = input<Data[]>([]);

    constructor() {
        this.init();
    }

    private get isFirst(): boolean {
        return this.curIndex() === 0;
    }

    private get isLast(): boolean {
        return this.curIndex() === this.appCarouselOf().length - 1;
    }

    private init() {
        effect(() => {
            const items = this.appCarouselOf();

            this.viewContainerRef.clear();

            if (!items.length) {
                return;
            }

            const curItem = items[this.curIndex()];

            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: curItem,
                curIndex: this.curIndex(),
                isFirst: this.isFirst,
                isLast: this.isLast,
                next: () => this.next(),
                back: () => this.back(),
                moveTo: (index: number) => this.moveTo(index),
            });
        });
    }

    private next(): void {
        if (this.isLast) {
            return;
        }

        this.curIndex.update(idx => idx + 1);
    }

    private back(): void {
        if (this.isFirst) {
            return;
        }

        this.curIndex.update(idx => idx - 1);
    }

    private moveTo(index: number): void {
        if (index < 0 || index > this.appCarouselOf().length - 1) {
            return;
        }

        this.curIndex.set(index);
    }
}
