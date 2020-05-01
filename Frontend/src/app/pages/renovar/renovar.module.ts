import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenovarPageRoutingModule } from './renovar-routing.module';

import { RenovarPage } from './renovar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenovarPageRoutingModule
  ],
  declarations: [RenovarPage]
})
export class RenovarPageModule {}
