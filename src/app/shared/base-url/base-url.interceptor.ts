import {HttpInterceptorFn} from '@angular/common/http';
import {baseUrl} from './baser-url.const';

export const baseUrlInterceptor: HttpInterceptorFn = (request, next) => {
    const newRequest = request.clone({
        url: `${baseUrl}/${request.url}`,
    });

    return next(newRequest);
};
