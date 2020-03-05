import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      
      name: 'Categorias',
      redirectTo:'/categorias',
      image: '/assets/imagen3.png'
    },
    {     
      name: 'Busqueda',
      redirectTo:'/busqueda',
      image: '/assets/imagen6.png'
    },
    {     
      name: 'Reservas',
      redirectTo:'/reserva',
      image: '/assets/imagen2.png'
    },
    {     
      name: 'Multas',
      redirectTo:'/multa',
      image: '/assets/imagen3.png'
    },
    {     
      name: 'Historial',
      redirectTo:'/historial',
      image: '/assets/imagen5.png'
    },
    {     
      name: 'Configuración',
      redirectTo:'/configuracion',
      image: '/assets/imagen7.png' 
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


