import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TomarPage } from './tomar.page';

const routes: Routes = [
  {
    path: '',
    component: TomarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TomarPageRoutingModule {}
