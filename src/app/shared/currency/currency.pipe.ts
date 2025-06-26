import {Pipe, PipeTransform} from '@angular/core';
import {getPrice} from './get-price';

@Pipe({
    name: 'currency',
    standalone: true,
})
export class CurrencyPipe implements PipeTransform {
    readonly transform = getPrice;
}
