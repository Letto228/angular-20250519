import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Product, ProductInfo} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly product = input<Product>();
    readonly count = input<number>();
    readonly addToCartHandler = output<ProductInfo>();

    onBuyButton(event: Event) {
        event.stopPropagation();
        // eslint-disable-next-line no-console
        console.log('Buy product');
        const product = this.product();

        if (product) {
            const productInfo = {
                id: product._id,
                name: product.name,
                price: product.price,
                image: product.images[0].url,
                quantity: 1,
            };

            this.addToCartHandler.emit(productInfo);
        }
    }

    isStarActive(starIndex: number): boolean {
        const product = this.product();

        return !!product && product?.rating >= starIndex;
    }
}
