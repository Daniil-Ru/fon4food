import { Component } from '@angular/core';

export interface DeliveryPersonOrder {
  id: number;
  date: string;
  status: string;
  // vendor: Vendor;
}

export const DELIVERY_PERSON_ORDER_STATE = {
  DONE: 'done',
};

const ELEMENT_DATA: DeliveryPersonOrder[] = [ // TODO
  { id: 123, date: '28-04-2020', status: DELIVERY_PERSON_ORDER_STATE.DONE },
  { id: 124, date: '29-04-2020', status: DELIVERY_PERSON_ORDER_STATE.DONE },
];

@Component({
  selector: 'f4f-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent {
  deliveries = ELEMENT_DATA;
}
