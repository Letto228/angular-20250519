import {ChangeDetectionStrategy, Component} from '@angular/core';
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
    readonly productsMockSource = productsMock;

    onClickBuyProduct(id: Product['_id']): void {
        // eslint-disable-next-line no-console
        console.log('Купить продукт по айди: ', id);
    }
}
