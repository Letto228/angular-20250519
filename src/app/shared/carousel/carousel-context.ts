import {ProductImage} from '../products/product-image.interface';

export interface CarouselContext {
    $implicit: ProductImage;
    url: ProductImage['url'];
    next: () => void;
    back: () => void;
}
