import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {EMPTY, map, Observable, timer} from 'rxjs';
import {ProductsApiService} from './products-api.service';
import {productsMock} from './products.mock';

const httpClientMock: HttpClient = {
    get(_url: string, _options: unknown): Observable<unknown> {
        return EMPTY;
    },
} as unknown as HttpClient;

describe('ProductsApiService', () => {
    let service: ProductsApiService;
    // let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            // providers: [provideHttpClient(), provideHttpClientTesting()],
            providers: [
                {
                    provide: HttpClient,
                    useValue: httpClientMock,
                },
            ],
        });
    });

    beforeEach(() => {
        service = TestBed.inject(ProductsApiService);

        // httpTestingController = TestBed.inject(HttpTestingController);
    });

    // it('HttpClientMock test', () => {
    //     const subscriptions = service.getProducts$().subscribe(products => {
    //         expect(products).toBe(productsMock);

    //         subscriptions.unsubscribe();
    //     });

    //     httpTestingController.expectOne('products/suggestion').flush({data: {items: productsMock}});
    // });

    it('DI my mock test', done => {
        spyOn(httpClientMock, 'get').and.returnValue(
            timer(1000).pipe(map(() => ({data: {items: productsMock}}))),
        );

        const subscriptions = service.getProducts$().subscribe(products => {
            expect(products).toBe(productsMock);

            subscriptions.unsubscribe();

            done();
        });
    });
});
