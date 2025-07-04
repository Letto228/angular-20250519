import {
    Directive,
    effect,
    inject,
    input,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {CarouselContext} from './carousel-context';

@Directive({
    selector: '[appCarousel]',
    standalone: true,
})
export class CarouselDirective<Data> {
    private readonly templateRef = inject<TemplateRef<CarouselContext<Data>>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    readonly appCarouselImagesList = input.required<Data[]>();
    readonly currentIndex = signal<number>(0);

    constructor() {
        this.changeIndex();
    }

    changeIndex(): void {
        effect(() => {
            if (this.appCarouselImagesList().length === 0) {
                return;
            }

            this.viewContainerRef.clear();

            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: this.appCarouselImagesList()[this.currentIndex()],
                index: this.currentIndex(),
                next: () => {
                    this.nextIndex();
                },
                back: () => {
                    this.backIndex();
                },
            });
        });
    }

    nextIndex(): void {
        this.currentIndex.update(index => {
            return index >= this.appCarouselImagesList().length - 1 ? 0 : index + 1;
        });
    }

    backIndex(): void {
        this.currentIndex.update(index => {
            return index === 0 ? this.appCarouselImagesList().length - 1 : index - 1;
        });
    }
}
