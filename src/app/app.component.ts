import {ChangeDetectionStrategy, Component, signal, TemplateRef, ViewChild} from '@angular/core';
import {HeaderComponent} from './app-components/header/header.component';
import {ProductsListComponent} from './pages/products-list/products-list.component';
import {SidenavComponent} from './app-components/sidenav/sidenav.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {PopupHostComponent} from './app-components/popup-host/popup-host.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, ProductsListComponent, SidenavComponent, PopupHostComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    @ViewChild('first', {static: true}) first!: TemplateRef<unknown>;
    @ViewChild('second', {static: true}) second!: TemplateRef<unknown>;
    @ViewChild('sidenavContent', {static: true}) sidenavContent!: TemplateRef<unknown>;

    switchTemplate = signal(true);
    closeTemplate = signal(false);

    readonly applicationConfig = applicationConfigMock;

    constructor() {
        setInterval(() => {
            this.toggleTemplate();
        }, 3000);
    }

    private toggleTemplate() {
        this.switchTemplate.set(!this.switchTemplate());
        this.closeTemplate.set(!this.closeTemplate());
    }
}
