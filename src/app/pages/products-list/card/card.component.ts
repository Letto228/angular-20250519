import {Component, Input} from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {Product} from '../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatIcon,
        MatCardTitle,
        MatCardSubtitle,
    ],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    @Input() product?: Product;
}
