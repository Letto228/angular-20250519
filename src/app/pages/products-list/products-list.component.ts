import {ChangeDetectionStrategy, Component, ElementRef, inject, signal} from '@angular/core';
import {NgFor, NgIf, NgTemplateOutlet} from '@angular/common';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';
import {InsertShadowDirective} from '../../shared/insert-shadow/insert-shadow.directive';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, NgFor, NgIf, NgTemplateOutlet, InsertShadowDirective],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly element = inject(ElementRef);
    readonly products = signal<Product[] | null>(null);

    constructor() {
        // eslint-disable-next-line no-console
        console.log(this.element.nativeElement);
        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);
    }

    trackBy(_index: number, item: Product) {
        // return item; // default
        return item._id;
    }
}
