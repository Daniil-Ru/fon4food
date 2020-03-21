import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLan = 'de';

  constructor(readonly translateService: TranslateService) {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang(this.selectedLan);
  }

  changeLanguage(lan: string) {
    this.selectedLan = lan;
    this.translateService.use(lan);
  }
}
