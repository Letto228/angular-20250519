import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {CardComponent} from './card/card.component';
import {productsMock} from '../../shared/products/products.mock';
import {Product} from '../../shared/products/product.interface';
import {MyNgForDirective} from '../../shared/my-ng-for/my-ng-for.directive';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, NgFor, NgIf, MyNgForDirective],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products = signal<Product[] | null>(null);

    // readonly viewport = viewChild.required('vewport', {read: ViewContainerRef});
    // readonly cardTemplate = viewChild.required<
    //     string,
    //     TemplateRef<{product: Product; $implicit: Product}>
    // >('cardTemplate', {
    //     read: TemplateRef,
    // });

    // constructor() {
    //     effect(() => {
    //         this.products().forEach(product => {
    //             this.viewport().createEmbeddedView(this.cardTemplate(), {
    //                 product,
    //                 $implicit: product,
    //             });
    //         });
    //     });
    // }

    constructor() {
        setTimeout(() => {
            this.products.set(productsMock);
        }, 3000);

        // setTimeout(() => {
        //     console.log('[...oldProducts]');
        //     this.products.update(oldProducts => [...oldProducts]);
        // }, 3000);

        // setTimeout(() => {
        //     console.log('oldProducts.map(product => ({...product}))');
        //     this.products.update(oldProducts =>
        //         oldProducts.map((product, index) => (index === 3 ? {...product} : product)),
        //     );
        // }, 6000);

        // setTimeout(() => {
        //     console.log('({...product, feedbacksCount: 2})');
        //     this.products.update(oldProducts =>
        //         oldProducts.map(product => ({...product, feedbacksCount: 2})),
        //     );
        // }, 9000);
    }

    trackBy(index: number, item: Product) {
        // return item; // default
        return item._id;
    }
}
