import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    effect,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    standalone: true,
    templateUrl: './popup-host.component.html',
    styleUrl: './popup-host.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
})
export class PopupHostComponent {
    readonly template = input.required<TemplateRef<unknown> | null>();

    readonly contentViewport = viewChild('contentViewport', {read: ViewContainerRef});

    readonly isOpen = computed(() => {
        return this.template() !== null;
    });

    constructor() {
        effect(() => {
            if (this.isOpen()) {
                this.changeContent();
            } else {
                this.clearContent();
            }
        });
    }

    clearContent(): void {
        this.contentViewport()?.clear();
    }

    changeContent(): void {
        const template = this.template();

        if (template !== null) {
            this.clearContent();
            this.contentViewport()?.createEmbeddedView(template);
        }
    }
}
