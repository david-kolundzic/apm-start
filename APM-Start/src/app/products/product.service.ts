import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IProduct } from './product';
import { catchError, filter, find, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'api/products/products.json';
  errorMessage:string='';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap( data => console.log('All: ', JSON.stringify(data))), 
      catchError(this.handleError)
        );      
    
  }
  getProduct(id:number):Observable<IProduct|undefined>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      map((products:IProduct[]) =>
            products.find(p => p.productId == id)
        )
    )
  }

  setError(message:string):void{
    this.errorMessage=message;
  }
  readError():string{
    return this.errorMessage;
  }

  private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred ${err.error.message}`
    }else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(()=> errorMessage)
  }
  
}
