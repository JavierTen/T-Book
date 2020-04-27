import { Component, OnInit } from '@angular/core';
import { PrestamosService } from '../../services/prestamos.service';
import { Prestamo } from 'src/app/interfaces/prestamosInterface';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.page.html',
  styleUrls: ['./prestamos.page.scss'],
})
export class PrestamosPage implements OnInit {

  prestamos: Prestamo[] =[];

  constructor(private prestamosService: PrestamosService) { }

  ngOnInit() {
    this.prestamosService.getPrestamos()
    .subscribe(resp => {
      console.log(resp.prestamo);
      this.prestamos.push(...resp.prestamo);

    })
  }
  
  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  
}
