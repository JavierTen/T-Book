import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Book} from '../../models/book';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.page.html',
  styleUrls: ['./busqueda.page.scss'],
})
export class BusquedaPage implements OnInit {

  bookData: any;
 

  constructor(
    public apiService: ApiService,public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    this.bookData = [];
  }

  ngOnInit() {
    this.getAllBooks();
  }

  getAllBooks() {
    //Get saved list of book
    this.apiService.getBooks().subscribe(response => {
      console.log(response);
      this.bookData = response;
    })
  }
}
