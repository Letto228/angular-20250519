import {HttpInterceptorFn} from '@angular/common/http';
import {tap} from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (request, next) => {
    return next(request).pipe(
        tap({
            error: (error: unknown) => {
                // eslint-disable-next-line no-console
                console.log(error);
            },
        }),
    );
};
