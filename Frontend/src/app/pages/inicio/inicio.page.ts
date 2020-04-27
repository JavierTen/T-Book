import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

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
      redirectTo:'/prestamos', 
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
    //{     
    //  name: 'Configuración',
    //  redirectTo:'/configuracion',
    //  image: '../assets/5.png'
    //},
  ];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  logout(){
    this.usuarioService.logout();
  }
}

  interface Componente {    
    name: string;
    redirectTo: string;
    image: string;
  }

  




