import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {filter, map} from 'rxjs';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {CarouselDirective} from '../../shared/carousel/carousel.directive';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [
        CarouselDirective,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        RouterOutlet,
        RouterLink,
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly router = inject(Router);

    // private readonly currentProductId$ = of('vytazka-polnovstraivaemaa-lex-gs-bloc-p-600-bezevyj');
    private readonly currentProductId$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('productId')),
        filter(Boolean),
    );

    constructor() {
        this.currentProductId$.subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });

        // eslint-disable-next-line no-console
        console.log(this.activatedRoute.snapshot);
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }

    navigateToTab(tabName: string) {
        // const urlTree = this.router.createUrlTree([`./${tabName}`], {
        //     relativeTo: this.activatedRoute,
        // });

        // console.log(urlTree.toString());

        // this.router.navigateByUrl(urlTree);

        this.router.navigate([`./${tabName}`], {
            relativeTo: this.activatedRoute,
        });
    }
}
