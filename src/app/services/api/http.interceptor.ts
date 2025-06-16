import { HttpHandler, HttpHeaderResponse, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";

export class HttpInterceptorImpl implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('request handled in interceptor', req);
        let clonedReq = req.clone({
          headers: req.headers.append('new-header', 'ok'),
          params: req.params.append('new-param', 'ok')
        });
        return next.handle(clonedReq);
    }

}