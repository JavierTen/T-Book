import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;



  constructor(private http: HttpClient, private storage: Storage) { }


  login(idEstudiante: string, password: string) {

    const data = { idEstudiante, password };

    return new Promise(resolve => {
      this.http.post('http://localhost:3000/user/login', data)
        .subscribe(resp => {
          console.log(resp);

          if (resp['ok']) {
            this.guardarToken(resp['token']);
          } else {
            this.token = null;
            this.storage.clear();
          }
        })
    });



  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set('token', token);

  }

}
