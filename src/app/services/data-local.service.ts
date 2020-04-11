import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Item } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  libros: any;

  constructor(private storage: Storage) { }

  guardarLibro(libro){
    this.libros.shift(libro);
    this.storage.set('historial', this.libros);
  }

  cargarHistorial(){

  }


}
