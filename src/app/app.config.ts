import {ApplicationConfig, inject, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {routes} from './app.routes';
import {NAME_TOKEN} from './shared/token/name.token';
import {baseUrlInterceptor} from './shared/base-url/base-url.interceptor';
import {errorInterceptor} from './shared/error-interceptor/error.interceptor';

export class TestToken {
    constructor() {
        // eslint-disable-next-line no-console
        console.log('TestToken', inject(NAME_TOKEN));
    }
}

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        // HttpClient,
        provideHttpClient(withInterceptors([baseUrlInterceptor, errorInterceptor])),
        TestToken,
        {
            provide: NAME_TOKEN,
            useValue: 'appConfig',
        },
    ],
};
