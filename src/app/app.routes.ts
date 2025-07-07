import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        // component: ProductsListComponent,
        redirectTo: '/products-list',
        pathMatch: 'full',
    },
    {
        path: 'products-list',
        // component: ProductsListComponent,
        loadComponent: () =>
            import('./pages/products-list/products-list.component').then(
                m => m.ProductsListComponent,
            ),
    },
    // {
    //     path: 'product/id/test',
    //     component: TestComponent,
    // },
    // {
    //     path: 'product/id', // product/id/description
    //     component: ProductComponent,
    //     pathMatch: 'prefix',
    //     children: [
    //         // "description"
    //         {
    //             path: 'description',
    //             component: DescriptionComponent,
    //         },
    //         {
    //             path: 'type',
    //             component: TypeComponent,
    //         },
    //     ],
    // },
    // {
    //     path: 'product',
    //     children: [
    //         {
    //             path: 'id',
    //             component: ProductComponent,
    //             children: [
    //                 {
    //                     path: 'description',
    //                     component: DescriptionComponent,
    //                 },
    //                 {
    //                     path: 'type',
    //                     component: TypeComponent,
    //                 },
    //             ],
    //         },
    //     ],
    // },
    {
        path: 'product', // product/id/description
        loadChildren: () => import('./pages/product/product.routes').then(m => m.routes),
    },
    // {
    //     path: 'product/id/test',
    //     component: TestComponent,
    // },
    {
        path: '**',
        component: NotFoundComponent,
    },
];
