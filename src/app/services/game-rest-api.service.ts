import { Injectable } from '@angular/core';
import { httpError, httpErrorCode } from '../httpError';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GameAPI, GameDetailAPI } from '../models/games';
import { tap, map, retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameRestApiService {

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
  getGameList(query: string): Observable<GameAPI[]> {
    return this.http.get<GameAPI>(`${this.apiURL}/games?search=${query}&page_size=50`)
      .pipe(
        tap(console.log),
        map((res) => {
          if (res.results.length > 0) {
            return res.results;
          }
          return 0;
        }),
        retry(1),
        catchError(this.handleError))
      ;
  }

  /**
  * @autor Carlos Alonso Casales Ortega
  */
  getGameDetail(slug: string): Observable<GameDetailAPI> {
    return this.http.get<GameDetailAPI>(`${this.apiURL}/games/${slug}`)
      .pipe(
        tap(console.log),
        map((res: GameDetailAPI) => {
          return res;
        }),
        retry(1),
        catchError(this.handleError)
      );
  }

  // Observer for Error handling 
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
