import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CardComponent} from './card/card.component';
import {Product} from '../../shared/products/product.interface';
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
    readonly cart = signal<Product[]>([]);

    constructor() {
        setInterval(() => {
            this.count.update(c => c + 1);
        }, 1000);
    }

    onBuyProduct(id: string) {
        const product: Product | undefined = productsMock.find(item => item._id === id);

        if (product && !this.cart().includes(product)) {
            this.cart.set([...this.cart(), product]);
        }

        // eslint-disable-next-line no-console
        console.log('Current cart:', this.cart());
    }
}
