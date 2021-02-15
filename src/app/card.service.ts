import { Injectable } from "@angular/core";
import { Card } from "./card";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class CardService {
  // URL which returns list of JSON items (API end-point URL)
  private readonly URL =
    "http://localhost/Laravel/Card_selling/public/api/card";
        

  httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  constructor(private http: HttpClient, private messageService: MessageService) {}
  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object

  getCards(): Observable<Card[]> {
      return this.http.post<[Card]>(this.URL + '/list', { 'card_name': 'Dragon negro'}).pipe(
      tap(_ => this.log('fetched cards')),
      catchError(this.handleError<Card[]>('getCards', []))
    );
     
  }

  getCard(id: number): Observable<Card> {
    const url = `${this.URL + '/get/card'}/${id}`;    
    return this.http.get<Card>(url).pipe(
      tap(_ => this.log(`fetched card id=${id}`)),
      catchError(this.handleError<Card>(`getCard id=${id}`))
  );
  }
}
