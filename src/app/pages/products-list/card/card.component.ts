import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
    readonly product = input.required<Product>();
    readonly isBuy = input.required<boolean>();

    readonly productBuy = output<boolean>();
    readonly productPrev = output<Product>();
    readonly productNext = output<Product>();

    getAction(): string {
        return this.isBuy() ? 'Remove' : 'Buy';
    }

    onProductView() {
        // console.log("Просмотр товара: " + this.product().name);
    }

    // onProductPrev() {
    //   console.log("Prev product");
    //   this.productPrev.emit(this.product());
    // }
    // onProductNext() {
    //   console.log("Next product");
    //   this.productNext.emit(this.product());
    // }
    // onProductBuy() {
    //   this.productBuy.emit(this.isBuy());
    // }
    isStarActive(starIndex: number): boolean {
        return !!this.product() && this.product().rating >= starIndex;
    }
}
