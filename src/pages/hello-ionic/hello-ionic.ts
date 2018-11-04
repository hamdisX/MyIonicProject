import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppareilsPage} from '../appareils/appareils'

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController) {}

  onGoToAppareils() {
    this.navCtrl.push(AppareilsPage);
  }
}
