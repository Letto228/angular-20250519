import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './app-components/header/header.component';
import {SidenavComponent} from './app-components/sidenav/sidenav.component';
import {applicationConfigMock} from './shared/application-config/application-config.mock';
import {NAME_TOKEN} from './shared/token/name.token';
import {TestToken} from './app.config';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeaderComponent, SidenavComponent, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NAME_TOKEN,
            useValue: 'AppComponent',
        },
    ],
})
export class AppComponent {
    readonly applicationConfig = applicationConfigMock;

    constructor() {
        inject(TestToken);
    }
}
