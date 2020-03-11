import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TomarPageRoutingModule } from './tomar-routing.module';

import { TomarPage } from './tomar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TomarPageRoutingModule
  ],
  declarations: [TomarPage]
})
export class TomarPageModule {}
