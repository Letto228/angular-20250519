import {
    Directive,
    effect,
    inject,
    input,
    signal,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import {ProductImage} from '../products/product-image.interface';
import {CarouselContext} from './carousel-context';

@Directive({
    selector: '[appCarousel]',
    standalone: true,
})
export class CarouselDirective {
    private readonly templateRef = inject<TemplateRef<CarouselContext>>(TemplateRef);
    private readonly viewContainerRef = inject(ViewContainerRef);

    readonly appCarouselImagesList = input.required<ProductImage[]>();

    currentIndex = signal<number>(0);

    constructor() {
        this.changeIndex();
    }

    changeIndex(): void {
        effect(() => {
            if (!this.appCarouselImagesList()) {
                return;
            }

            this.viewContainerRef.clear();

            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: this.appCarouselImagesList()[this.currentIndex()],
                url: this.appCarouselImagesList()[this.currentIndex()].url,
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
