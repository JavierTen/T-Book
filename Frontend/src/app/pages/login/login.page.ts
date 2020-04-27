import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IonSlides, NavController } from "@ionic/angular";
import { UsuarioService } from "src/app/services/usuario.service";
import { UiServiceService } from "src/app/services/ui-service.service";
import { Usuario } from "src/app/interfaces/usuarioInterface";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  @ViewChild("slidePrincipals") slides: IonSlides;

  avatars = [
    {
      img: "av-1.png",
      seleccionado: true,
    },
    {
      img: "av-2.png",
      seleccionado: false,
    },
    {
      img: "av-3.png",
      seleccionado: false,
    },
    {
      img: "av-4.png",
      seleccionado: false,
    },
    {
      img: "av-5.png",
      seleccionado: false,
    },
    {
      img: "av-6.png",
      seleccionado: false,
    },
    {
      img: "av-7.png",
      seleccionado: false,
    },
    {
      img: "av-8.png",
      seleccionado: false,
    },
  ];

  avartarSlide = {
    slidesPerView: 3.5,
  };

  loginUser = {
    idEstudiante: "",
    password: "",
  };

  registerUser: Usuario = {
    avatar: '',
    nombre: '',
    apellido: '',
    idEstudiante: '',
    facultad: '',
    email: '',
    password: '',
  };

  constructor(
    private usuarioService: UsuarioService,
    private navCtrl: NavController,
    private uiService: UiServiceService
  ) {}

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  async login(fLogin: NgForm) {
    if (fLogin.invalid) {
      return;
    }

    const valido = await this.usuarioService.login(
      this.loginUser.idEstudiante,
      this.loginUser.password
    );

    console.log(valido);

    if (valido) {
      this.navCtrl.navigateRoot("/inicio", { animated: true });
    } else {
      this.uiService.alertaInformativa("Usuario y contraseña invalidos");
    }
  }

  async registro(fRegistro: NgForm) {
    if (fRegistro.invalid){return;}
    const valido = await this.usuarioService.registro(this.registerUser);
    if (valido) {
      this.navCtrl.navigateRoot("/inicio", { animated: true });
    } else {
      this.uiService.alertaInformativa("El ID del estudiante ya existe registrado");
    }

  }

  seleccionarAvartar(avatar) {
    this.avatars.forEach((av) => (av.seleccionado = false));
    avatar.seleccionado = true;
    this.registerUser.avatar = avatar.img;
  }

  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }
}
