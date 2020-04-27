import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrestamosComponent } from "./prestamos/prestamos.component";
import { PrestamoComponent } from "./prestamo/prestamo.component";
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PrestamosComponent, PrestamoComponent],
  exports: [PrestamosComponent],
  imports: [CommonModule,IonicModule],
})
export class ComponentsModule {}
