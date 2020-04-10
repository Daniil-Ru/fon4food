import { Component } from '@angular/core';
import { PATHS } from '../../app-routing.model';

@Component({
  selector: 'f4f-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly PATHS = PATHS;
}
