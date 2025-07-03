import {HttpInterceptorFn} from '@angular/common/http';
import {tap} from 'rxjs';
import {baseUrl} from './baser-url.const';

export const baseUrlInterceptor: HttpInterceptorFn = (request, next) => {
    const newRequest = request.clone({
        url: `${baseUrl}/${request.url}`,
    });

    // eslint-disable-next-line no-console
    console.log('Request baseUrlInterceptor', newRequest);

    return next(newRequest).pipe(
        tap(responce => {
            // eslint-disable-next-line no-console
            console.log('Responce baseUrlInterceptor', responce);
        }),
    );
};
