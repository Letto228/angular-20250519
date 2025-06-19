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

type MyCarouselContext = {
    $implicit: ProductImage;
    next: () => void;
    back: () => void;
};

@Directive({
    selector: '[appCarousel]',
    standalone: true,
})
export class CarouselDirective {
    private readonly viewContainerRef = inject(ViewContainerRef);
    private readonly templateRef = inject<TemplateRef<MyCarouselContext>>(TemplateRef);

    private readonly index = signal<number>(0);

    readonly appCarouselOf = input.required<ProductImage[]>();

    constructor() {
        effect((): void => {
            const items = this.appCarouselOf();

            this.viewContainerRef.clear();

            if (!items) {
                return;
            }

            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: items[this.index()],
                next: () => {
                    this.index.update(currentIndex => {
                        let currentIndexTmp = currentIndex;

                        if (currentIndexTmp === this.appCarouselOf.length) {
                            currentIndexTmp = 0;
                        } else {
                            currentIndexTmp += 1;
                        }

                        return currentIndexTmp;
                    });
                },
                back: () => {
                    this.index.update(currentIndex => {
                        let currentIndexTmp = currentIndex;

                        if (currentIndexTmp === 0) {
                            currentIndexTmp = this.appCarouselOf.length;
                        } else {
                            currentIndexTmp -= 1;
                        }

                        return currentIndexTmp;
                    });
                },
            });
        });
    }
}
