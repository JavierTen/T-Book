import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';
import { RespuestaPrestamos } from '../interfaces/prestamosInterface';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  getPrestamos(){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });
    return this.http.get<RespuestaPrestamos>(`${URL}/prestamo/`,{headers});

  }

  CrearPrestamo(prestamo){
    const headers = new HttpHeaders({
      'x-token': this.usuarioService.token
    });

    this.http.post(`${URL}/prestamo/`,prestamo,{headers})
    .subscribe(resp => {
      console.log(resp);
    });

  }
}
