import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { PATHS } from '../../app-routing.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'f4f-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  selectedLan = 'de';
  isCollapsed = true;

  userName$: Observable<string>;
  isLoggedIn$: Observable<boolean>;

  readonly PATHS = PATHS;
  readonly title = 'fon4food';
  readonly faBell = faBell;
  readonly faUser = faUser;
  readonly languages = [{
    shortName: 'de',
    longName: 'Deutsch',
  }, {
    shortName: 'en',
    longName: 'English',
  }];

  constructor(readonly translateService: TranslateService,
              readonly userService: UserService,
              readonly http: HttpClient,
              readonly router: Router) {
  }

  ngOnInit() {
    this.userName$ = this.userService.userName$;
    this.isLoggedIn$ = this.userService.roles$
      .pipe(
        filter(roles => roles != null),
        map(roles => roles.length > 0),
      );

    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.isCollapsed = true;
      });
  }

  changeLanguage(lan: string) {
    this.selectedLan = lan;
    this.translateService.use(lan);
    this.isCollapsed = true;
  }

  logout() {
    this.http.post(`${environment.backend_url}/logout`, {})
      .subscribe(
        () => {
          this.userService.update(null);
        },
      );
  }
}
