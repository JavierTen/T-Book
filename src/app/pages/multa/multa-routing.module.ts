import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultaPage } from './multa.page';

const routes: Routes = [
  {
    path: '',
    component: MultaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultaPageRoutingModule {}
