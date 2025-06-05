import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CardComponent} from './card/card.component';
import {Product, ProductInfo} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly count = signal(0);
    readonly product = computed<Product>(() => productsMock[this.count() % productsMock.length]);
    readonly cart = signal<ProductInfo[]>([]);

    constructor() {
        setInterval(() => {
            this.count.update(c => c + 1);
        }, 1000);
    }

    addProductToCart(product: ProductInfo) {
        this.cart.set([...this.cart(), product]);
        // eslint-disable-next-line no-console
        console.log('In cart now:', this.cart());
    }
}
