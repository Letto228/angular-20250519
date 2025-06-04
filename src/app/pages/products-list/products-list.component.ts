import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
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
    readonly count = signal<number>(0);
    productMap = new Map<Product, boolean>();

    constructor() {
        productsMock.forEach(pm => this.productMap.set(pm, false));
    }

    getCurrentProduct(): Product {
        return productsMock[this.count()];
    }

    getCurrentProductState(): boolean {
        return !!this.productMap.get(productsMock[this.count()]);
    }

    onProductPrev(): void {
        if (this.count() === 0) {
            this.count.set(productsMock.length - 1);
        } else {
            this.count.update(value => value - 1);
        }
    }

    onProductNext(): void {
        if (this.count() === productsMock.length - 1) {
            this.count.set(0);
        } else {
            this.count.update(value => value + 1);
        }
    }

    onProductBuy(isBuy: boolean): void {
        this.productMap.set(productsMock[this.count()], !isBuy);
    }
}
