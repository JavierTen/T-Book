//api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../models/book';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  // API path
  base_path = 'http://192.168.1.28/api';
 
  constructor(private http: HttpClient) { }
 
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
 
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
 
 
  // Create a new item
  createItem(item): Observable<Book> {
    return this.http
      .post<Book>(this.base_path, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Get single Book data by ID
  getBook(id): Observable<Book> {
    return this.http
      .get<Book>(this.base_path + '/books/show/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  // Get single Book data by ID
  getCategorie(id): Observable<Book> {
    return this.http
      .get<Book>(this.base_path + '/categories/show/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

 
  // Get Books data
  getBooks(): Observable<Book> {
    return this.http
      .get<Book>(this.base_path + '/books')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


 
  // Update item by id
  updateItem(id, item): Observable<Book> {
    return this.http
      .put<Book>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Book>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
 
}