import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor( private alertController : AlertController, private navCtrl: NavController, public toastController: ToastController) { }

  async alertaInformativa( message: string) {
    const alert = await this.alertController.create({
      header: 'Atención',
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaPrestamo( message: string) {
    const alert = await this.alertController.create({
      header: 'Tu préstamo fue exitoso',
      message,
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateRoot('/inicio', { animated: true });
        }
      }]
    });

    await alert.present();
  }

  async ToastPrestamo() {
    const toast = await this.toastController.create({
      header: 'Tu préstamo fue exitoso!',
      color: "primary",
      message: 'Recuerda entregarlo a tiempo y así evitar multas.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateRoot('/inicio', { animated: true });
          }
        }
      ]
    });
    toast.present();
  }


}
