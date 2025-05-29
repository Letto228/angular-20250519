import {Component} from '@angular/core';
import {MatCardModule, MatCardImage} from '@angular/material/card';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [MatCardModule, MatCardImage],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    title = productsMock[0].name;
    price = productsMock[0].price;
    url = productsMock[0].images[0].url;
}
