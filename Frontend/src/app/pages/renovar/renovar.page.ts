import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UiServiceService } from "src/app/services/ui-service.service";
import { BookService } from "src/app/services/book.service";


@Component({
  selector: 'app-renovar',
  templateUrl: './renovar.page.html',
  styleUrls: ['./renovar.page.scss'],
})
export class RenovarPage implements OnInit {

  FPrestamo: string;
  FEntrega: string;

  id: string;
  title: string;
  image: string;

  constructor( public activatedRoute: ActivatedRoute,
    public router: Router,
    private bookService: BookService,
    private uiService: UiServiceService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.bookService.getBookId(this.id).subscribe((resp) => {
      console.log(resp.id);
      this.title = resp.volumeInfo.title;
      this.image = resp.volumeInfo.imageLinks.smallThumbnail;
    });  
    this.fecha(); 
  }

  fecha() {
    var fecha = new Date();
    console.log(fecha);
    var diasPrestamo = 4;
    var fechaEntegaStr;
    this.FPrestamo = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    fecha.setDate(fecha.getDate() + diasPrestamo);
    var diaSemana = fecha.getDay();
    if (diaSemana === 0) {
      fecha.setDate(fecha.getDate() + diasPrestamo - 2);
      fechaEntegaStr = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    } else {
      fechaEntegaStr = fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    }
  }

}
