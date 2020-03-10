import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  bookData: any;

  constructor(
    public apiService: ApiService
  ) {
    this.bookData = [];
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    //Get saved list of book
    this.apiService.getList().subscribe(response => {
      this.bookData = response;
    })
    //console.log(this.bookData);
    console.log("caacasd");
  }
}
