import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-single-appareil',
  templateUrl: 'single-appareil.html',
})
export class SingleAppareilPage implements OnInit {

  appareil: {
    name: string,
    description: string[]
  };
  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.appareil  = this.navParams.get('appareil');
  }

}