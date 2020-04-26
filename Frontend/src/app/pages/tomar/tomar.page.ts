import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { DataLocalService } from 'src/app/services/data-local.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-tomar',
  templateUrl: './tomar.page.html',
  styleUrls: ['./tomar.page.scss'],
})
export class TomarPage implements OnInit {

  FPrestamo: string;
  FEntrega: string;

  id: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  image: string;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router, private bookService: BookService, private dataLocalService: DataLocalService, private uiService: UiServiceService) { }

  ngOnInit() {
    this.fecha();

    //----------------------------

    this.id = this.activatedRoute.snapshot.params["id"];
      this.bookService.getBookId(this.id).subscribe(resp =>{
      console.log(resp.id);
      this.title = resp.volumeInfo.title;
      this.authors = resp.volumeInfo.authors;
      this.publisher = resp.volumeInfo.publisher;
      this.publishedDate = resp.volumeInfo.publishedDate;
      this.description = resp.volumeInfo.description;
      this.image = resp.volumeInfo.imageLinks.smallThumbnail;

    })
  }

  fecha() {
    var fecha = new Date();
    var diasPrestamo = 4; 
    var fechaEntegaStr;
    this.FPrestamo = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    fecha.setDate(fecha.getDate() + diasPrestamo);
    var diaSemana = fecha.getDay()
    if (diaSemana === 0){
      fecha.setDate(fecha.getDate() + diasPrestamo-2);
      fechaEntegaStr = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    }else{
      fechaEntegaStr = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    }
    
  }

  tomar(){
    this.uiService.alertaPrestamo(`recuerda que tienes plazo para entregrarlo hasta el \n ${this.FEntrega}`);
    handler: () => {
      console.log('Confirm Ok');
    }
  }

}
