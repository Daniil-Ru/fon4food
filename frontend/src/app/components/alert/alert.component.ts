import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ALERT_CONFIG, AlertType } from './alert.model';

@Component({
  selector: 'f4f-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @ContentChild('header') header: TemplateRef<any>;
  @ContentChild('body') body: TemplateRef<any>;

  @Input()
  alertType:AlertType;

  readonly CONFIG = ALERT_CONFIG;
}
