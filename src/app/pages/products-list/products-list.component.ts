import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CommonModule, CardComponent],
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    @Output() productBought = new EventEmitter<Product>();

    products = [...productsMock];

    // ngOnInit(): void {

    // }

    onProductBought(product: Product) {
        this.productBought.emit(product);
    }
}
