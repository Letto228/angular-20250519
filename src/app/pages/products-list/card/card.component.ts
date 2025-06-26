import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {JsonPipe} from '@angular/common';
import {Product} from '../../../shared/products/product.interface';
import {CarouselDirective} from '../../../shared/carousel/carousel.directive';
import {CurrencyPipe} from '../../../shared/currency/currency.pipe';
import {getPrice} from '../../../shared/currency/get-price';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        CarouselDirective,
        CurrencyPipe,
        JsonPipe,
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    readonly getPrice = getPrice;
    // readonly utilits = {getPrice};

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }

    // getPrice(): string {
    //     const valute = '$';

    //     return `${this.product().price} ${valute}`;
    // }
}
