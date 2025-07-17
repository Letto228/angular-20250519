import {ComponentFixture, TestBed} from '@angular/core/testing';

import {By} from '@angular/platform-browser';
import {HeaderComponent} from './header.component';
import {applicationConfigMock} from '../../shared/application-config/application-config.mock';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HeaderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;

        fixture.componentRef.setInput('appConfig', applicationConfigMock);

        fixture.detectChanges();
    });

    // it('Клик по конпке', () => {
    //     const trigerEvent = new Event('clcik');
    //     const menuButtonDebugElement = fixture.debugElement.query(
    //         By.css('[test-id="header-menu-button"]'),
    //     );
    //     const menuClickEmitSpy = spyOn(component.menuClick, 'emit');

    //     expect(menuClickEmitSpy).not.toHaveBeenCalled();

    //     menuButtonDebugElement.triggerEventHandler('click', trigerEvent);

    //     expect(menuClickEmitSpy).toHaveBeenCalled();
    // });

    it('Клик по конпке', done => {
        const trigerEvent = new Event('clcik');
        const menuButtonDebugElement = fixture.debugElement.query(
            By.css('[test-id="header-menu-button"]'),
        );

        const subscriprion = component.menuClick.subscribe(event => {
            // eslint-disable-next-line no-console
            console.log('expect');
            // expect(event).toEqual(null as unknown as Event);
            // expect(event).toEqual(new Event(''));
            // expect(event).toBe(new Event(''));
            // expect(event).toBe(null as unknown as Event);
            expect(event).toBe(trigerEvent);

            subscriprion.unsubscribe();

            done();
        });

        // expect(menuClickEmitSpy).not.toHaveBeenCalled();

        // eslint-disable-next-line no-console
        console.log('triger after');
        menuButtonDebugElement.triggerEventHandler('click', trigerEvent);
        // eslint-disable-next-line no-console
        console.log('triger before');

        // expect(menuClickEmitSpy).toHaveBeenCalled();
    });
});
