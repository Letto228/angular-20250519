import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {canDeactivateTestGuard} from './shared/test-guards/can-deactivate-test.guard';

export const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     // canMatch: [canMatchTestGuard],
    //     // canActivate: [canActivateTestGuard],
    //     loadComponent: () =>
    //         import('./pages/products-list/products-list.component').then(
    //             m => m.ProductsListComponent,
    //         ),
    // },
    {
        path: '',
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        canDeactivate: [canDeactivateTestGuard],
        loadComponent: () =>
            import('./pages/products-list/products-list.component').then(
                m => m.ProductsListComponent,
            ),
    },
    {
        path: 'product',
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
