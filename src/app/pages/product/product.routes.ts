import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {TypeComponent} from './type/type.component';
import {DescriptionComponent} from './description/description.component';

export const routes: Routes = [
    {
        path: 'id',
        component: ProductComponent,
        children: [
            // "description"
            {
                path: 'description',
                component: DescriptionComponent,
                // loadComponent: () =>
                //     import('./description/description.component').then(m => m.DescriptionComponent),
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];
