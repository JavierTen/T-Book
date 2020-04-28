import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PrestamosComponent } from "./prestamos/prestamos.component";
import { PrestamoComponent } from "./prestamo/prestamo.component";
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [PrestamosComponent, PrestamoComponent,AvatarSelectorComponent],
  exports: [PrestamosComponent,AvatarSelectorComponent],
  imports: [CommonModule,IonicModule],
})
export class ComponentsModule {}
