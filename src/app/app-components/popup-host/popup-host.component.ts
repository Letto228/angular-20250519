import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    imports: [],
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupHostComponent {
    readonly template = input.required<TemplateRef<unknown> | null>();

    readonly viewPort = viewChild.required('viewPort', {read: ViewContainerRef});

    constructor() {
        effect(() => {
            this.viewPort().clear();

            if (this.template()) {
                this.viewPort().createEmbeddedView(this.template()!);
            }
        });
    }
}
