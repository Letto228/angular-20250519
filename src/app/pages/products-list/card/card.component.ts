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
    // readonly product = input.required<{name: string; feedbackCount: number}, Product>({
    //     transform: (value: Product): {name: string; feedbackCount: number} => {
    //         return {
    //             name: value.name,
    //             feedbackCount: value.feedbacksCount,
    //         };
    //     },
    // });
    readonly product = input.required<Product>();

    readonly buy = output<Product['_id']>();

    onProductBuy(event: Event) {
        event.stopPropagation();

        this.buy.emit(this.product()._id);
    }

    isStarActive(starIndex: number): boolean {
        return this.product().rating >= starIndex;
    }
}
