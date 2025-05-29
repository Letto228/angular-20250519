import {Component} from '@angular/core';
import {Product} from '../../../shared/products/product.interface';
import {productsMock} from '../../../shared/products/products.mock';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent {
    product: Product;
    title: string;
    price: number;
    imageUrl: string;
    description: string;

    constructor() {
        this.product = productsMock[0];
        this.title = this.product.name;
        this.price = this.product.price;
        this.imageUrl = this.product.images[0].url;
        this.description =
            'Планшет DEXP Ursus S290 – устройство со сбалансированными характеристиками. Он адаптирован для различных задач – веб-серфинг, запуск многочисленных приложений, просмотр мультимедийного контента, обучение, работа и т. д.Планшет DEXP Ursus S290 32 ГБ 3G выпускается в черном цвете. Он обладает лаконичным дизайном, а корпус выполнен из прочного пластика. В данную модель установлен дисплей с диагональю 9.6 дюйма. Разрешение экрана – 1280x800 пикселей, картинка хорошего качества, работать с планшетом действительно комфортно.Наличие модуля мобильной связи можно назвать существенным преимуществом. Удается выходить в Интернет с применением сетей 3G. Обеспечивается передача данных на высокой скорости, можно пользоваться различными онлайн-ресурсами.Планшет оснащается аккумулятором с емкостью 4500 мА·ч. Для зарядки и передачи данных используется привычный разъем microUSB. В набор поставки производитель включает адаптер питания и кабель USB для подключения. Толщина корпуса планшета незначительная – 9 мм, а вес – 475 грамм. Благодаря этому устройство комфортно лежит в руках.';
    }
}
