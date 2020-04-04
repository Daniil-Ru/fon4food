import {Component} from '@angular/core';
import {faBell, faUser} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';
import {UserService} from './services/user.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {UserInfo} from './services/user.service.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'f4f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLan = 'de';
  isCollapsed = true;

  userName$: Observable<string>;
  userRoles$: Observable<string[]>;
  isLoggedIn$: Observable<boolean>;

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

  constructor(readonly translateService: TranslateService, readonly userService: UserService, readonly http: HttpClient) {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang(this.selectedLan);
    this.userRoles$ = userService.roles$;
    this.userName$ = userService.userName$;
    this.isLoggedIn$ = userService.roles$.pipe(
      map(roles => roles.length > 0),
    );

    if (localStorage.getItem('loggedIn')) {
      this.http.get(`${environment.backend_url}/user`)
        .subscribe((data: UserInfo) => {
          this.userService.update(data);
        });
    }
  }

  changeLanguage(lan: string) {
    this.selectedLan = lan;
    this.translateService.use(lan);
  }

  logout() {
    this.http.get(`${environment.backend_url}/logout`, {}).subscribe(
      () => {
        this.userService.update(null);
        localStorage.removeItem('loggedIn');
      }
    );
  }
}
