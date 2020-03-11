import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/book';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.page.html',
  styleUrls: ['./book.page.scss'],
})
export class BookPage implements OnInit {

   book:Book; 
   id: number;
   title: string;
   author: string;
   signature: string;
   inventarie: string;
   edition: string;
   barcode: string;
   description: string;
   categorie_id: number;
   facultie_id: number;
   report_id: number;

   
   categorie: string;
  
  
  constructor(public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService) {
      
    }

  ngOnInit() {

    this.getBook();

    
    this.getCategorie();

    

  }

  getBook(){
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getBook(this.id).subscribe(response => {
      this.id = response.id;
      this.title = response.title;
      this.author= response.author;
      this.signature= response.signature;
      this.inventarie= response.inventarie;
      this.edition= response.edition;
      this.barcode= response.barcode;
      this.description= response.description;
      this.categorie_id= response.categorie_id;
      this.facultie_id= response.facultie_id;
      this.report_id= response.report_id;

      this.apiService.getCategorie(this.categorie_id).subscribe(response => {
        this.categorie = response.title;
      })
      
    })



  }

  getCategorie(){
   
    

  }

}
