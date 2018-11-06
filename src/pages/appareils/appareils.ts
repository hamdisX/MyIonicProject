import { Component } from '@angular/core';
import { ModalController ,NavController} from 'ionic-angular';
import { SingleAppareilPage } from './single-appareil/single-appareil';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';
import {LineChartsPage} from '../line-charts/line-charts'

@Component({
  selector: 'page-appareils',
  templateUrl: 'appareils.html'
})
export class AppareilsPage {

  appareilsList: Appareil[];

  constructor(private modalCtrl: ModalController,
    private appareilsService: AppareilsService,public navCtrl: NavController) {}

    goLineChart(){
      this.navCtrl.push(LineChartsPage)
    }

    ionViewWillEnter() {
      this.appareilsList = this.appareilsService.appareilsList.slice();
      console.log("hook ",this.appareilsList)
    }
  
    onLoadAppareil(index: number) {
      let modal = this.modalCtrl.create(SingleAppareilPage, {index: index});
      modal.present();
    }


  
}