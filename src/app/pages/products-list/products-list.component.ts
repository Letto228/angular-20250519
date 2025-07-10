import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CardComponent} from './card/card.component';
import {InsertShadowDirective} from '../../shared/insert-shadow/insert-shadow.directive';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, InsertShadowDirective, ScrollWithLoadingDirective, RouterLink],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);

    // readonly products = signal<Product[] | null>(null);

    constructor() {
        // setTimeout(() => {
        //     this.products.set(productsMock);
        // }, 3000);
        this.productsStoreService.loadProducts();
    }

    getProducts(): ReturnType<ProductsStoreService['getProducts']> {
        return this.productsStoreService.getProducts();
    }

    navigateToProduct(productId: string) {
        // const urlTree = this.router.createUrlTree(['product', productId]);

        // console.log(urlTree.toString());

        // this.router.navigateByUrl(`/product/${productId}`);
        // this.router.navigateByUrl(urlTree);
        // this.router.navigateByUrl(urlTree.toString());

        this.router.navigate(['product', productId]);
    }
}
