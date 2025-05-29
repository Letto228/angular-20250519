import {Component} from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {Product} from '../../../shared/products/product.interface';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-product-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
    readonly product: Product = productsMock[0];
}
