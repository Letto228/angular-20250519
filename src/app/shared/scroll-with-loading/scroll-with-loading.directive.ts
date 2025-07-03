import {Directive, ElementRef, inject, output} from '@angular/core';

@Directive({
    selector: '[appScrollWithLoading]',
    standalone: true,
    host: {
        '(scroll)': 'onScroll($event)',
    },
})
export class ScrollWithLoadingDirective {
    private readonly element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    private readonly heightBottom = 100;
    private prevScrollTop = 0;

    readonly loadNextData = output<void>();

    onScroll(event: Event) {
        const scrollTop = (<HTMLElement>event.target).scrollTop;
        const scrollHeight = this.element.scrollHeight;
        const clientHeight = this.element.clientHeight;

        if (
            this.isBottom(scrollTop) &&
            scrollTop >= scrollHeight - clientHeight - this.heightBottom
        ) {
            this.loadNextData.emit();
        }

        this.prevScrollTop = scrollTop;
    }

    private isBottom(curScrollTop: number): boolean {
        return curScrollTop > this.prevScrollTop;
    }
}
