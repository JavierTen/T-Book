import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {     
      name: 'Búsqueda',
      redirectTo:'/busqueda', 
      image: '../assets/2.png'
    },
    {     
      name: 'Préstamos',
      redirectTo:'/escaner', 
      image: '../assets/3.png'
    },
    {     
      name: 'Reservas',
      redirectTo:'/reserva', 
      image: '../assets/1.png'
    },
    {     
      name: 'Multas',
      redirectTo:'/multa',
      image: '../assets/4.png'
    },
    {     
      name: 'Configuración',
      redirectTo:'/configuracion',
      image: '../assets/5.png'
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




