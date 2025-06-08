import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

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
    readonly product = computed(() => productsMock[this.count()]);
    readonly interval: ReturnType<typeof setInterval>;

    constructor() {
        this.interval = setInterval(() => {
            this.count.update(val => val + 1);

            if (this.count() === productsMock.length - 1) {
                clearTimeout(this.interval);
            }
        }, 3000);
    }

    onProductBuy(product: Product) {
        // eslint-disable-next-line no-console
        console.log('Buy product', product);
    }
}
