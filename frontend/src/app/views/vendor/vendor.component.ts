import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface DeliveryOrder {
  id: number;
  date: string;
  deliveryPerson: string;
  status: string;
}

export const ORDER_STATE = {
  OPEN: 'open',
  READY: 'ready',
};

const ELEMENT_DATA: DeliveryOrder[] = [ // TODO
  { id: 123, date: '28-04-2020', deliveryPerson: 'lilly', status: ORDER_STATE.OPEN },
  { id: 124, date: '29-04-2020', deliveryPerson: 'lisa', status: ORDER_STATE.OPEN },
  { id: 126, date: '29-04-2020', deliveryPerson: 'lina', status: ORDER_STATE.READY },
  { id: 126, date: '29-04-2020', deliveryPerson: 'lino', status: ORDER_STATE.OPEN },
];

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss'],
})
export class VendorComponent implements OnInit {
  displayedColumns: string[] = ['id', 'date', 'deliveryPerson', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
}
