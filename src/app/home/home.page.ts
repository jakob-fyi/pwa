import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Impressum',
      message: 'AppArtig e.U.<br>Neubaugasse 17<br>3133 Gemeinlebarn',
      buttons: ['OK']
    });

    await alert.present();
  }

}
