import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface DeliveryPersonOrder {
  id: number;
  date: string;
  status: string;
}

export const DELIVERY_PERSON_ORDER_STATE = {
  DONE: 'done',
};

const ELEMENT_DATA: DeliveryPersonOrder[] = [ // TODO
  { id: 123, date: '28-04-2020', status: DELIVERY_PERSON_ORDER_STATE.DONE },
  { id: 124, date: '29-04-2020', status: DELIVERY_PERSON_ORDER_STATE.DONE },
];

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
