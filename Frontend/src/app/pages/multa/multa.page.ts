import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multa',
  templateUrl: './multa.page.html',
  styleUrls: ['./multa.page.scss'],
})
export class MultaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliderOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

}
