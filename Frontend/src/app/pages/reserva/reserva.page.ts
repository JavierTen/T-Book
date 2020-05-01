import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UiServiceService } from "src/app/services/ui-service.service";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  id: string;
  title: string;
  image: string;
  FEntrega: string;

  constructor(public activatedRoute: ActivatedRoute,
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
    
  }

  fechaReserva(event){
    var fechaRes: string;
    var fechaSplit: string;
    var mesStr: string;
    var mesInt;
    var diaInt;
    var diaStr: string;
    var fecha = new Date();
    var fechaEntrega = new Date();
    var fechaEntregaStr: string;
    fechaRes = event.detail.value;
    var splitted = fechaRes.split("T"); 
    fechaSplit = splitted[0];
    splitted = fechaSplit.split("-");
    mesStr = splitted[1];
    diaStr = splitted[2];
    mesInt = +mesStr;
    diaInt = +diaStr;
    var fechaReserva: string;
    if((fecha.getMonth()+1) === mesInt){
      if(fecha.getDate() === diaInt){
        fechaReserva = "0"+(fecha.getDate()+2)+"/0"+(fecha.getMonth()+1);
        this.FEntrega =fechaReserva;
      }else{
        var resta = diaInt - fecha.getDate();
        fechaReserva = (fecha.getDate()+resta)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
        //
        fechaEntrega.setDate(fecha.getDate()+resta);
        fechaEntrega.setMonth(fecha.getMonth());
        fechaEntregaStr ="0"+(fechaEntrega.getDate()+2)+"/0"+(fechaEntrega.getMonth()+1);
        this.FEntrega = fechaEntregaStr;
        //
        console.log('fechaReserva: ',fechaEntregaStr);
      }
    }else{
      var restaM = mesInt - fecha.getMonth();
      if(fecha.getDate() === diaInt){
        fechaReserva = "0"+(fecha.getDate()+2)+"/0"+(fecha.getMonth()+restaM);
        this.FEntrega =fechaReserva;
      }else{
        var resta = diaInt - fecha.getDate();
        fechaReserva = (fecha.getDate()+resta)+"/"+(fecha.getMonth()+restaM)+"/"+fecha.getFullYear();
        //
        fechaEntrega.setDate(fecha.getDate()+resta);
        fechaEntrega.setMonth(fecha.getMonth());
        fechaEntregaStr ="0"+(fechaEntrega.getDate()+2)+"/0"+(fecha.getMonth()+restaM);
        this.FEntrega = fechaEntregaStr;
        //
        console.log('fechaReserva: ',fechaEntregaStr);
      }
    }
    
  }

}
