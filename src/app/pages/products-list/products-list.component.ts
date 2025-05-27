import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {Product} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';
import {CardComponent} from './card/card.component';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, NgForOf],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
    products: Product[] = productsMock;
}
