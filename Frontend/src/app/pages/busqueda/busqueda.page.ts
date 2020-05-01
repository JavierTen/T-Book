import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/interfaces';
import { BookService } from 'src/app/services/book.service';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  libro: Item[]=[];
  libroBuscar = '';

  constructor(private bookService : BookService) {
  }

 
  ngOnInit(){
     
  }


  google(text){
    this.bookService.getBook(text).subscribe(
      resp  =>{   
        console.log(resp);
        this.libro.push (...resp.items);
      }
    )
  }
  buscar(event){
    this.libroBuscar = event.detail.value;
    var re = / /gi;
    var text = this.libroBuscar.replace(re,"+");
    this.google(text);

  }

}
