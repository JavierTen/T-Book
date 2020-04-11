import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RespuestaBook } from '../interfaces/interfaces';
import { RespuestaBusqueda } from '../interfaces/bookInterface';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  base_path = 'https://www.googleapis.com/books/v1/volumes?q=';
  final_path = '& key= AIzaSyCwo7AKZ2Y3GMtKYEhSeZV66G_pOfKBmr4';
  base_path_id = 'https://www.googleapis.com/books/v1/volumes/';

  constructor(private http: HttpClient) { }

  getBook(buscar){
    return this.http.get<RespuestaBook>(this.base_path+buscar+this.final_path);
  }

  getBookId(id){
    return this.http.get<RespuestaBusqueda>(this.base_path_id+id);
  }
}