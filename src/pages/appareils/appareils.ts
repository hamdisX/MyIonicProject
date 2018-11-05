import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

  appareilsList: Appareil[];

  constructor(private modalCtrl: ModalController,
    private appareilsService: AppareilsService) {}

    ionViewWillEnter() {
      this.appareilsList = this.appareilsService.appareilsList.slice();
      console.log("hook ",this.appareilsList)
    }
  
    onLoadAppareil(index: number) {
      let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
      modal.present();
    }


  
}