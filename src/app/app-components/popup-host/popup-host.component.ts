import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgTemplateOutlet} from '@angular/common';
import {PopupServiceService} from '../../services/popup-service/popup-service.service';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [NgTemplateOutlet, MatIconModule, MatButtonModule],
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent<Data> {
    readonly popupService = inject(PopupServiceService<Data>);

    closePopup() {
        this.popupService.closePopup();
    }
}
