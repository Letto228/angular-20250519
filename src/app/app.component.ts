import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeaderComponent} from './app-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {SidenavComponent} from './app-components/sidenav/sidenav.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent, SidenavComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;
}
