import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal') slides: IonSlides;

  avatars = [
    {
      img: '/assets/avatars/av-1.png',
      seleccionado: true
    },
    {
      img: '/assets/avatars/av-2.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-3.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-4.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-5.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-6.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-7.png',
      seleccionado: false
    },
    {
      img: '/assets/avatars/av-8.png',
      seleccionado: false
    },
  ];

  avartarSlide = {
    slidesPerView: 3.5
  };

  constructor() { }

  ngOnInit() {
    this.slides.lockSwipes(true);
  }

  login(fLogin: NgForm) {
    console.log(fLogin.valid);
  }

  registro(fRegistro: NgForm) {
    console.log(fRegistro.valid);
  }

  seleccionarAvartar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
  }

  mostrarRegistro(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  mostrarLogin(){
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
