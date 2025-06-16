import {
    ChangeDetectionStrategy,
    Component,
    effect,
    input,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    standalone: true,
    imports: [MatSidenavModule, MatButtonModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
    readonly contentTemplate = input.required<TemplateRef<unknown>>();

    readonly contentViewport = viewChild.required('contentViewport', {read: ViewContainerRef});
    readonly drawerComponent = viewChild.required(MatDrawer);

    constructor() {
        effect(() => {
            this.contentViewport().createEmbeddedView(this.contentTemplate());
        });
    }

    toggleDrawer() {
        this.drawerComponent().toggle();
    }
}
