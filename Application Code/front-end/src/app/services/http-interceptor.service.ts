import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  
  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    token:string=sessionStorage.getItem('token')
    if(this.token!=null){
    req=req.clone({
      setHeaders: {
        Authorization : 'Bearer '+this.token
      }
    })
    console.log("request intercpeted succesfully"+req.url)
  }
  return next.handle(req)
}
}
