import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultaPageRoutingModule } from './multa-routing.module';

import { MultaPage } from './multa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultaPageRoutingModule
  ],
  declarations: [MultaPage]
})
export class MultaPageModule {}
