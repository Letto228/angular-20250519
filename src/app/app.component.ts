import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {HeaderComponent} from './app-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {SidenavComponent} from './app-components/sidenav/sidenav.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent, SidenavComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    // readonly title = 'angular-20250519';
    readonly applicationConfig = applicationConfigMock;

    readonly drawerOpenedStore = signal(false);

    onMenuClicked(event: Event) {
        // eslint-disable-next-line no-console
        console.log('App menu clicked', event);

        this.toggleDrawer();
    }

    toggleDrawer() {
        this.drawerOpenedStore.update(isOpened => !isOpened);
    }
    // onProductBought(product: Product) {

    //   }
}
