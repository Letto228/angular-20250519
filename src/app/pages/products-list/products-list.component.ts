import {Component} from '@angular/core';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
    readonly products = productsMock;

    onProductPurchased(id: string) {
        // eslint-disable-next-line no-console
        console.log('Товар куплен:', id);
    }
}
