import { Component } from '@angular/core';
import { PATHS } from '../../app-routing.model';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly PATHS = PATHS;
}
