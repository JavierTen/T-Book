import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { environment } from "../../environments/environment";
import { Usuario } from "../interfaces/usuarioInterface";
import { NavController } from '@ionic/angular';

const URL = environment.url;

@Injectable({
  providedIn: "root",
})
export class UsuarioService {
  token: string = null;

  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) {}

  login(idEstudiante: string, password: string) {
    const data = { idEstudiante, password };
    return new Promise((resolve) => {
      this.http
        .post("http://localhost:3000/user/login", data)
        .subscribe(async (resp) => {
          console.log(resp);
          if (resp["ok"]) {
            await this.guardarToken(resp["token"]);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  logout(){
    this.token = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login', { animated: true });
  }

  registro(usuario: Usuario) {
    return new Promise((resolve) => {
      this.http
        .post("http://localhost:3000/user/create", usuario)
        .subscribe((resp) => {
          console.log(resp);
          if (resp["ok"]) {
            this.guardarToken(resp["token"]);
            resolve(true);
          } else {
            this.token = null;
            this.storage.clear();
            resolve(false);
          }
        });
    });
  }

  async guardarToken(token: string) {
    this.token = token;
    await this.storage.set("token", token);
  }
}
