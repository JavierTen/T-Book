import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionERPageRoutingModule } from './accion-er-routing.module';

import { AccionERPage } from './accion-er.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccionERPageRoutingModule
  ],
  declarations: [AccionERPage]
})
export class AccionERPageModule {}
