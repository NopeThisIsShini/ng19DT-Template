import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const newBaseUrl = environment.baseUrl;

  // Create the new URL by replacing the old base URL with the new one
  const modifiedUrl = newBaseUrl + req.url;

  // Clone the request and replace the URL with the modified URL
  const modifiedRequest = req.clone({
    url: modifiedUrl
  });

  return next(modifiedRequest);
};
