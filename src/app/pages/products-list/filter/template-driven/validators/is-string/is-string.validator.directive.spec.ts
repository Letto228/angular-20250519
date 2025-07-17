import {FormControl, FormsModule, NgModel} from '@angular/forms';
import {Component} from '@angular/core';
import {ComponentFixture, fakeAsync, flush, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {IsStringValidatorDirective} from './is-string.validator.directive';

describe('IsStringValidatorDirective isolate', () => {
    // it('should create an instance', () => {
    //     const directive = new IsStringValidatorDirective();

    //     expect(directive).toBeTruthy();
    // });
    let directive: IsStringValidatorDirective;

    beforeEach(() => {
        directive = new IsStringValidatorDirective();
    });

    it('String no error', () => {
        // const error = isStringValidator(new FormControl('String'));
        const error = directive.validate(new FormControl('String'));

        expect(error).toEqual(null);
    });

    it('Number error', () => {
        const error = directive.validate(new FormControl('123'));

        expect(error).toEqual({isString: 'Is string validator error'});
    });
});

@Component({
    selector: 'app-test',
    template: `
        <input appIsStringValidator [ngModel]="search" />
    `,
    standalone: true,
    imports: [IsStringValidatorDirective, FormsModule],
})
class TestComponent {
    search = '123';
}

describe('IsStringValidatorDirective integration', () => {
    let fixture: ComponentFixture<TestComponent>;
    // let component: TestComponent;
    let inputNgModel: NgModel;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        // component = fixture.componentInstance;
        inputNgModel = fixture.debugElement.query(By.css('input')).injector.get(NgModel);
    });

    // it('Number error', async () => {
    //     fixture.detectChanges();

    //     await fixture.whenStable();

    //     const error = inputNgModel.errors;

    //     expect(error).toEqual({isString: 'Is string validator error'});
    // });

    it('Number error', fakeAsync(() => {
        fixture.detectChanges();

        // tick(100);
        flush();

        const error = inputNgModel.errors;

        expect(error).toEqual({isString: 'Is string validator error'});
    }));
});
