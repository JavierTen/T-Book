import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionERPage } from './accion-er.page';

const routes: Routes = [
  {
    path: '',
    component: AccionERPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccionERPageRoutingModule {}
