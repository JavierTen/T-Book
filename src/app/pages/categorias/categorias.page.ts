import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  componentes: Componente[] = [
    {     
      name: 'Categoria0',
      redirectTo:''
    },
    {
      name: 'Categoria1',
      redirectTo:''
    },
    {     
      name: 'Categoria2',
      redirectTo:''
    },
    {     
      name: 'Categoria3',
      redirectTo:''
    },
    {     
      name: 'Categoria4',
      redirectTo:''
    },
    {     
      name: 'Categoria5',
      redirectTo:''
    },
    {     
      name: 'Categoria6',
      redirectTo:''
    },
    {     
      name: 'Categoria7',
      redirectTo:''
    },
    {     
      name: 'Categoria8',
      redirectTo:''
    },
    {     
      name: 'Categoria9',
      redirectTo:''
    },

  ];

  constructor() { }

  ngOnInit() {
  }
}

  interface Componente {
    
    name: string;
    redirectTo: string;
  }



