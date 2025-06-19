import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ProductsListComponent} from '../../pages/products-list/products-list.component';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatSidenavModule, MatButtonModule, ProductsListComponent],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    readonly drawerOpened = input(false);

    readonly drawerOpenedChange = output<boolean>();

    toggleDrawer() {
        this.drawerOpenedChange.emit(!this.drawerOpened());
    }
}
