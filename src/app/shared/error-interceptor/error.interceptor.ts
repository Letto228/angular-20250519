import {HttpInterceptorFn} from '@angular/common/http';
import {tap} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
    // eslint-disable-next-line no-console
    console.log('Request errorInterceptor', request);

    return next(request).pipe(
        tap({
            next: responce => {
                // eslint-disable-next-line no-console
                console.log('Responce errorInterceptor', responce);
            },
            error: (error: unknown) => {
                // eslint-disable-next-line no-console
                console.log(error);
            },
        }),
    );
};
