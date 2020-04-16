import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import {VolumeInfo} from 'src/app/interfaces/bookInterface';
import { DataLocalService } from 'src/app/services/data-local.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

  id: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  image: string;


  constructor( public activatedRoute: ActivatedRoute,
    public router: Router, private bookService: BookService, private dataLocalService: DataLocalService) { }

  ngOnInit() { 
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


}
