import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { User } from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // URL which returns list of JSON items (API end-point URL)
  
    private readonly URL =
    "http://localhost/Laravel/Card_selling/public/api/user";    

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

  registerUser(user:User): Observable<User> {
    return this.http.post<User>(this.URL + '/signup', user, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.username}`)),
      catchError(this.handleError<User>('registerUser'))
    );
  }

  login(username: String, password: String): Observable<any>{
    return this.http.post(this.URL + '/login', {username, password}, this.httpOptions).pipe(
      tap((newUser: User) => this.log(`added user w/ id=${newUser.username}`)),
      catchError(this.handleError<User>('login')),
    )
  } 
}
