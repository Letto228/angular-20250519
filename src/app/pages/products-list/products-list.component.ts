import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CardComponent} from './card/card.component';
import {ScrollWithLoadingDirective} from '../../shared/scroll-with-loading/scroll-with-loading.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';
import {BrandsService} from '../../shared/brands/brands.service';
import {FilterComponent} from './filter/template-driven/filter.component';
// import {FilterComponent} from './filter/reactive/filter.component';

@Component({
    selector: 'app-products-list',
    standalone: true,
    imports: [CardComponent, FilterComponent, ScrollWithLoadingDirective, RouterLink],
    templateUrl: './products-list.component.html',
    styleUrl: './products-list.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly router = inject(Router);
    private readonly brandsService = inject(BrandsService);

    // readonly products = signal<Product[] | null>(null);

    constructor() {
        // setTimeout(() => {
        //     this.products.set(productsMock);
        // }, 3000);
        this.productsStoreService.loadProducts();
        this.brandsService.loadBrands();
    }

    getProducts(): ReturnType<ProductsStoreService['getProducts']> {
        return this.productsStoreService.getProducts();
    }

    getBrands(): ReturnType<BrandsService['getBrands']> {
        return this.brandsService.getBrands();
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
