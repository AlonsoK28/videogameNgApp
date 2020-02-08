import { Injectable } from '@angular/core';
import { httpError, httpErrorCode } from '../models/httpError';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { GameAPI, GameDetailAPI } from '../models/games';
import { tap, map, retry, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameRestApiService {

  apiURL = environment.apiURL;
  httpE: httpError;
  constructor(private http: HttpClient) {
  }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  /**
  * Get a list of top Games by search term.
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  * @http https://api.rawg.io/docs/#tag/games
  * @return [Games]
  */
  getGameSearch(query: string): Observable<GameAPI[]> {
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
  * Get Game detail by game slug.
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  * @http https://api.rawg.io/docs/#operation/games_read
  * @return Game
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

  /**
  * Get a list of Games by search term.
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  * @http https://api.rawg.io/docs/#tag/games
  * @return [Games]
  */
  getGameList(query: string): Observable<GameAPI[]> {
    return this.http.get<GameAPI>(`${this.apiURL}/games?${query}&page_size=50`)
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
  * Observer error handler, crate an new observer with http error code to be validated in template
  * @autor Carlos Alonso Casales Ortega <calonso011@yahoo.com.mx>
  */
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
    return throwError(this.httpE);
  }
}
