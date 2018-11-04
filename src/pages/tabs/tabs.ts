import { Component } from '@angular/core';
import { AppareilsPage } from '../appareils/appareils';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  appareilsPage = AppareilsPage;
  settingsPage = SettingsPage;
}