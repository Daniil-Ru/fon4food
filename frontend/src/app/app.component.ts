import { Component } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'f4f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLan = 'de';
  isCollapsed = true;

  readonly title = 'fon4food';
  readonly faBell = faBell;
  readonly faUser = faUser;

  constructor(readonly translateService: TranslateService) {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang(this.selectedLan);
  }

  changeLanguage(lan: string) {
    this.selectedLan = lan;
    this.translateService.use(lan);
  }
}
