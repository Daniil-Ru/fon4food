import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Vendor {
  name: string;
  address: string;
  zipCode: string;
  city: string;
  phone: string;
  orderTimes: string;
  deliveryFlatRate: string;
}

const ELEMENT_DATA: Vendor[] = [ // TODO
  { name: "Max Gemüse", zipCode: "73462", address: "Meine Straße 234", city:'Musterstadt', phone: '0789 890', orderTimes: 'Mo', deliveryFlatRate: '10€'},
  { name: "MusterMarkt", zipCode: "73461", address: "Kleine Gasse 34731", city:'Musterstadt', phone: '(2)435 890', orderTimes: '8:0- 8:30', deliveryFlatRate: '2€'},
  { name: "MeinSupermarkt", zipCode: "32567", address: "Am schönen Rain 34", city:'Irgendwo', phone: '3 890', orderTimes: 'Mo', deliveryFlatRate: '1.5€'},
];

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent implements OnInit {
displayedColumns: string[] = ['name', 'address', 'phone', 'orderTimes', 'deliveryFlatRate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
