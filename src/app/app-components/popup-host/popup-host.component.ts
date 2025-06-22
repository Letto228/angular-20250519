import {
    ChangeDetectionStrategy,
    Component,
    Input,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent implements OnChanges {
    @Input() template: TemplateRef<unknown> | null = null;

    @ViewChild('popupContainer', {read: ViewContainerRef, static: true})
    viewContainerRef!: ViewContainerRef;

    ngOnChanges(changes: SimpleChanges): void {
        // eslint-disable-next-line dot-notation
        if (changes['template']) {
            this.updateView();
        }
    }

    private updateView(): void {
        if (!this.viewContainerRef) {
            return;
        }

        this.viewContainerRef.clear();

        if (this.template) {
            this.viewContainerRef.createEmbeddedView(this.template);
        }
    }
}
