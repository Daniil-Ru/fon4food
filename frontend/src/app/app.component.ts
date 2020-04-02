import { Component } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'f4f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLan = 'de';
  isCollapsed = true;

  userRole = '';
  readonly title = 'fon4food';
  readonly faBell = faBell;
  readonly faUser = faUser;
  readonly languages = [{
    shortName: 'de',
    longName: 'Deutsch'
  }, {
    shortName: 'en',
    longName: 'English'
  }];

  constructor(readonly translateService: TranslateService, readonly userService: UserService) {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang(this.selectedLan);
    this.userRole = userService.role;
  }

  changeLanguage(lan: string) {
    this.selectedLan = lan;
    this.translateService.use(lan);
  }
}
