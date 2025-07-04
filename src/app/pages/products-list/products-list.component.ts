import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, NgFor, NgIf],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products = signal<Product[] | null>(productsMock);

    trackBy(_index: number, item: Product) {
        // return item; // default
        return item._id;
    }
}
