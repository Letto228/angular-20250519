import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    output,
    TemplateRef,
} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';
import {PopupServiceService} from '../../services/popup-service/popup-service.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly popupService = inject(PopupServiceService<string>);

    readonly appConfig = input.required<ApplicationConfig>();
    readonly menuClick = output<Event>();

    openPopup(_template: TemplateRef<{$implicit: string}>) {
        this.popupService.openPopup(_template, 'super title');
    }

    closePopup() {
        this.popupService.closePopup();
    }
}
