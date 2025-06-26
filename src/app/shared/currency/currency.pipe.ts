import {Pipe, PipeTransform} from '@angular/core';
import {getPrice} from './get-price';

@Pipe({
    name: 'currency',
    standalone: true,
    pure: false,
})
export class CurrencyPipe implements PipeTransform {
    // transform(price: number, _locale: string, _format: string = ''): string {
    //     // const valute = '$';
    //     const valute = 'Р';

    //     console.log(price);

    //     return `${price} ${valute}`;
    // }

    readonly transform = getPrice;
}
