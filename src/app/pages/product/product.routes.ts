import {Routes} from '@angular/router';
import {ProductComponent} from './product.component';
import {TypeComponent} from './type/type.component';
import {DescriptionComponent} from './description/description.component';
import {canActivateTestGuard} from '../../shared/test-guards/can-activate-test.guard';
import {canActivateChildTestGuard} from '../../shared/test-guards/can-activate-child-test.guard';

export const routes: Routes = [
    {
        path: ':productId',
        component: ProductComponent,
        canActivate: [canActivateTestGuard],
        canActivateChild: [canActivateChildTestGuard],
        // canDeactivate: [canDeactivateTestGuard],
        children: [
            {
                path: '',
                redirectTo: 'description',
                pathMatch: 'full',
            },
            {
                path: 'description',
                component: DescriptionComponent,
            },
            {
                path: 'type',
                component: TypeComponent,
            },
        ],
    },
];
