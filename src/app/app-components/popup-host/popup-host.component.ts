import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EmbeddedViewRef,
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
    private currentView: EmbeddedViewRef<unknown> | null = null;
    readonly template = input<TemplateRef<unknown> | null>(null);
    readonly contentViewPort = viewChild.required('contentViewport', {read: ViewContainerRef});

    constructor() {
        effect(() => {
            const tpl = this.template();
            const view = this.contentViewPort();

            if (this.currentView) {
                this.currentView.destroy();
                this.currentView = null;
            }

            if (tpl) {
                this.currentView = view.createEmbeddedView(tpl);
            }
        });
    }
}
