import { Component, Input } from '@angular/core';
import { BADGES_CLASS } from './delivery-badge.model';

@Component({
  selector: 'f4f-delivery-badge',
  templateUrl: './delivery-badge.component.html',
  styleUrls: ['./delivery-badge.component.scss'],
})
export class DeliveryBadgeComponent {
  @Input()
  set status(newStatus: string) {
    this.badgeClass = BADGES_CLASS[newStatus] ?? BADGES_CLASS.standard;
    this._status = newStatus;
  }
  _status:string;

  badgeClass: string;
}
