import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import {of} from 'rxjs';
import {RouterOutlet} from '@angular/router';
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
    ],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
    private readonly productsStoreService = inject(ProductsStoreService);

    private readonly currentProductId$ = of('vytazka-polnovstraivaemaa-lex-gs-bloc-p-600-bezevyj');

    constructor() {
        this.currentProductId$.subscribe(id => {
            this.productsStoreService.loadProduct(id);
        });
    }

    getProduct(): ReturnType<ProductsStoreService['getProduct']> {
        return this.productsStoreService.getProduct();
    }
}
