import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductApp, ProductAPI } from '../models/product';
import { GameAPI, GameDetailAPI } from '../models/games';
import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';
import { httpErrorCode, httpError } from '../httpError';
@Injectable({
    providedIn: 'root'
})
export class ProductosRestApiService {
    apiPROTOCOL = 'https://';
    apiHOST = 'api.rawg.io/api';
    apiPORT = "8888";
    apiURL = `${this.apiPROTOCOL}${this.apiHOST}`;
    httpE: httpError;
    constructor(private http: HttpClient) { }
    // Http Options
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    /**
    * @autor Carlos Alonso Casales Ortega
    */
    getGameList(query:string):Observable<GameAPI[]>{
                return this.http.get<GameAPI>(`${this.apiURL}/games?search=${query}&page_size=50`)
                .pipe(   
                    tap(console.log),
                    map((res) => { 
                      if ( res.results.length > 0 ){
                        return res.results;
                      }
                      return 0;
                    }));
    }

    /**
    * @autor Carlos Alonso Casales Ortega
    */
   getGameDetail(query:string):Observable<GameDetailAPI>{
       return this.http.get<GameDetailAPI>(`${this.apiURL}/games/${query}`)
           .pipe(
               tap(console.log),
               map((res) => {
                   return res;
               }));
   }

    // HttpClient API get() method => Obtiene todos los productos
    getListadoProductos(): Observable<ProductApp[]> {
        return this.http.get<ProductAPI[]>(`${this.apiURL}/articles/`)
                    .pipe(
                        map((products: ProductAPI[]) => products.map( (product:ProductAPI) => new ProductApp(product) )),
                        retry(1),
                        catchError(this.handleError))
    }

    // HttpClient API get() method => Obtiene un producto por slug (slug generado a partir del titulo de producto)
    getProductoPorSlug(slug: string): Observable<ProductApp> {
        return this.http.get<ProductAPI>(`${this.apiURL}/articleTitle/${slug}`)
                    .pipe(
                        map((producto) => new ProductApp(producto)),
                        retry(1),
                        catchError(this.handleError))
    }

    // HttpClient API delete() method => Eliminar producto por Id
    deleteProductoPorId(id: number): Observable<ProductAPI> {
        return this.http.delete<ProductAPI>(`${this.apiURL}/article/${id}`, this.httpOptions)
                        .pipe(catchError(this.handleError))
    }

    // HttpClient API update() method => Actualizar por Id
    updateProductoPorId(productoNuevo: ProductAPI): Observable<ProductAPI> {
        return this.http.put<ProductAPI>(`${this.apiURL}/article/`, JSON.stringify(productoNuevo), this.httpOptions)
                    .pipe(catchError(this.handleError))
    }

    // HttpClient API insert() method => Insertar por Id
    createProducto(productoNuevo: ProductAPI) {
        return this.http.post<ProductAPI>(`${this.apiURL}/article/`, JSON.stringify(productoNuevo), this.httpOptions)
                    .pipe(catchError(this.handleError))
    }

    // HttpClient API get() method => Obtiene todos los productos
    getListadoProductosBusqueda(termino: string): Observable<ProductApp[]> {
        return this.http.get<ProductAPI[]>(`${this.apiURL}/articleTitleSearch/${termino}`)
                    .pipe(
                        map((products: ProductAPI[]) => products.map((product: ProductAPI) => new ProductApp(product))),
                        retry(1),
                        catchError(this.handleError)
                    )
    }

    // Error handling 
    handleError(error) {
        switch (error.status) {
            case httpErrorCode[0].code:
                var httpError = httpErrorCode[0];
                this.httpE = {
                    httpStatusCode: httpError.code,
                    httpErrorMessage: httpError.message
                };
                break;
                return
            case httpErrorCode[500].code:
                var httpError = httpErrorCode[500];
                this.httpE = {
                    httpStatusCode: httpError.code,
                    httpErrorMessage: httpError.message
                };
                break;
            case httpErrorCode[404].code:
                var httpError = httpErrorCode[404];
                this.httpE = {
                    httpStatusCode: httpError.code,
                    httpErrorMessage: httpError.message
                };
                break;
            case httpErrorCode[409].code:
                var httpError = httpErrorCode[409];
                this.httpE = {
                    httpStatusCode: httpError.code,
                    httpErrorMessage: httpError.message
                };
                break;
        }
        // if (error.error instanceof ErrorEvent) {
        //   // Get client-side error
        //   errorMessage = error.error.message;
        // } else {

        //   // Get server-side error
        //   // errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        // }
        return throwError(this.httpE);
    }

}