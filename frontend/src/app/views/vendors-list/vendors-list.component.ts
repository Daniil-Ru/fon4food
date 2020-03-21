import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Vendor {
  name: string;
  zipCode: string;
  address: string;
}

const ELEMENT_DATA: Vendor[] = [ // TODO
  { name: "Max Gemüse", zipCode: "73462", address: "Meine Straße 234, Musterstadt"},
  { name: "MusterMarkt", zipCode: "73461", address: "Kleine Gasse 34731, Musterstadt"},
  { name: "MeinSupermarkt", zipCode: "32567", address: "Am schönen Rain 34, Irgendwo"},
];

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss']
})
export class VendorsListComponent implements OnInit {
displayedColumns: string[] = ['name', 'address'];
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
