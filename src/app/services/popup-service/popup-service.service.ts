import {Injectable, signal, TemplateRef} from '@angular/core';
import {IPopupContext} from './popup-service.model';

@Injectable({
    providedIn: 'root',
})
export class PopupServiceService<Data> {
    readonly template = signal<TemplateRef<IPopupContext<Data>> | null>(null);
    readonly context = signal<IPopupContext<Data> | null>(null);

    openPopup(template: TemplateRef<IPopupContext<Data>>, context?: Data) {
        if (context) {
            this.context.set(this.getContext(context));
        }

        this.template.set(template);
    }

    closePopup() {
        this.template.set(null);
        this.context.set(null);
    }

    private getContext(context: Data): IPopupContext<Data> {
        return {
            $implicit: context,
        };
    }
}
