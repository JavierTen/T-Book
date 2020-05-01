import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { UiServiceService } from "src/app/services/ui-service.service";
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: "app-tomar",
  templateUrl: "./tomar.page.html",
  styleUrls: ["./tomar.page.scss"],
})
export class TomarPage implements OnInit {
  

  FPrestamo: string;
  FEntrega: string;

  id: string;
  title: string;
  image: string;

  prestamo = {
    idLibro: '',
    tituloLibro: '',
    imagenLibro: '',
  };

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    private bookService: BookService,
    private uiService: UiServiceService,
    private prestamoService: PrestamosService
  ) {}

  ngOnInit() {
    this.fecha();

    //----------------------------

    this.id = this.activatedRoute.snapshot.params["id"];
    this.bookService.getBookId(this.id).subscribe((resp) => {
      console.log(resp.id);
      this.title = resp.volumeInfo.title;
      this.image = resp.volumeInfo.imageLinks.smallThumbnail;
      this.prestamo.idLibro = this.activatedRoute.snapshot.params["id"];
      this.prestamo.tituloLibro = resp.volumeInfo.title;
      this.prestamo.imagenLibro = resp.volumeInfo.imageLinks.smallThumbnail;
    });
  }

  fecha() {
    var fecha = new Date();
    var diasPrestamo = 4;
    var fechaEntegaStr;
    this.FPrestamo =fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    fecha.setDate(fecha.getDate() + diasPrestamo);
    var diaSemana = fecha.getDay();
    if (diaSemana === 0) {
      fecha.setDate(fecha.getDate() + diasPrestamo - 2);
      fechaEntegaStr =fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    } else {
      fechaEntegaStr =fecha.getDate() + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
      this.FEntrega = fechaEntegaStr;
    }
  }

  tomar() {
    console.log(this.prestamo);
    this.prestamoService.CrearPrestamo(this.prestamo);
    this.uiService.ToastPrestamo();
  }

  verficarPrestamo(){
    //this.prestamoService.existePrestamo();
  }
}
