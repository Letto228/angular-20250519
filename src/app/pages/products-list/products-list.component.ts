import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';
import {InsertShadowDirective} from '../../shared/insert-shadow/insert-shadow.directive';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, InsertShadowDirective],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products = signal<Product[] | null>(null);

    constructor() {
        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);
    }
}
