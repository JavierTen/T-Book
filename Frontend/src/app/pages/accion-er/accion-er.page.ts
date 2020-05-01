import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookService } from "src/app/services/book.service";
import { UiServiceService } from "src/app/services/ui-service.service";
import { PrestamosService } from 'src/app/services/prestamos.service';

@Component({
  selector: 'app-accion-er',
  templateUrl: './accion-er.page.html',
  styleUrls: ['./accion-er.page.scss'],
})
export class AccionERPage implements OnInit {

  id: string;
  title: string;
  image: string;
  authors: string[];
  publisher: string;
  publishedDate: string;

  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    private bookService: BookService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.bookService.getBookId(this.id).subscribe((resp) => {
      console.log(resp.id);
      this.title = resp.volumeInfo.title;
      this.image = resp.volumeInfo.imageLinks.smallThumbnail;
      this.authors = resp.volumeInfo.authors;
      this.publisher = resp.volumeInfo.publisher;
      this.publishedDate = resp.volumeInfo.publishedDate;
    });
  }

}
