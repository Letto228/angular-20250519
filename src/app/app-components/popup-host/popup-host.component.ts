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
    readonly contentTemplate = viewChild.required('contentTemplate', {read: ViewContainerRef});

    constructor() {
        effect(() => {
            this.contentTemplate().clear();
            const templateTmp = this.template();

            if (templateTmp) {
                this.contentTemplate().createEmbeddedView(templateTmp);
            }
        });
    }
}
