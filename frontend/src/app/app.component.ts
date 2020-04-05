import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserInfo } from './services/user.service.model';

@Component({
  selector: 'f4f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(readonly translateService: TranslateService,
              readonly userService: UserService,
              readonly http: HttpClient) {
  }

  ngOnInit() {
    this.translateService.addLangs(['en', 'de']);
    this.translateService.setDefaultLang('de');

    this.http.get(`${environment.backend_url}/user`)
      .subscribe(
        (data: UserInfo) => {
          this.userService.update(data);
        },
        () => {
          this.userService.update(null);
        },
      );
  }
}
