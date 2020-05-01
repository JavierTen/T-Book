import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main', redirectTo: 'inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'busqueda',
    loadChildren: () => import('./pages/busqueda/busqueda.module').then( m => m.BusquedaPageModule)
  },
  {
    path: 'reserva/:id',
    loadChildren: () => import('./pages/reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'multa',
    loadChildren: () => import('./pages/multa/multa.module').then( m => m.MultaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'book/:id',
    loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'tomar/:id',
    loadChildren: () => import('./pages/tomar/tomar.module').then( m => m.TomarPageModule)
  },
  {
    path: 'escaner',
    loadChildren: () => import('./pages/escaner/escaner.module').then( m => m.EscanerPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'prestamos',
    loadChildren: () => import('./pages/prestamos/prestamos.module').then( m => m.PrestamosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'renovar/:id',
    loadChildren: () => import('./pages/renovar/renovar.module').then( m => m.RenovarPageModule)
  },
  {
    path: 'entrega/:id',
    loadChildren: () => import('./pages/entrega/entrega.module').then( m => m.EntregaPageModule)
  },
  {
    path: 'accion/:id',
    loadChildren: () => import('./pages/accion-er/accion-er.module').then( m => m.AccionERPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
