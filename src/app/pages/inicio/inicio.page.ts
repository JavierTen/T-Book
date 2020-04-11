import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {     
      name: 'Busqueda',
      redirectTo:'/busqueda', 
      image: '../assets/busq.png'
    },
    {     
      name: 'Escanear',
      redirectTo:'/escaner', 
      image: '../assets/histo.png'
    },
    {     
      name: 'Reservas',
      redirectTo:'/reserva', 
      image: '../assets/reserva.png'
    },
    {     
      name: 'Multas',
      redirectTo:'/multa',
      image: '../assets/multa.png'
    },
    {     
      name: 'Configuración',
      redirectTo:'/configuracion',
      image: '../assets/config.png'
    },
  ];

  constructor() { }

  ngOnInit() {
  }
}

  interface Componente {    
    name: string;
    redirectTo: string;
    image: string;
  }


