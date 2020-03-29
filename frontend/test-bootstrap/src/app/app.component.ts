import { Component } from '@angular/core';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'f4f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fon4food';
  isCollapsed = true;
  faBell = faBell;
  faUser = faUser;
}
