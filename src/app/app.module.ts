import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import{ChartsPageModule} from '../pages/charts/charts.module'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {AppareilsPage} from "../pages/appareils/appareils"
import {SingleAppareilPage} from "../pages/appareils/single-appareil/single-appareil"
import {TabsPage}from '../pages/tabs/tabs'
import{SettingsPage}from '../pages/settings/settings';
import{OptionsPage} from '../pages/options/options';
import{LineChartsPage} from '../pages/line-charts/line-charts'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {AppareilsService} from "../services/appareils.service"
@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    LineChartsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ChartsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    AppareilsPage,
    SingleAppareilPage,
    SettingsPage,
    TabsPage,
    LineChartsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppareilsService
  ]
})
export class AppModule {}
