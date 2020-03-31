import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from '../../../environments/environment';

export interface Vendor {
  name: string;
  address: string;
  zipCode: string;
  city: string;
  phone: string;
  orderTimes: string;
  deliveryFlatRate: string;
}

@Component({
  selector: 'app-vendors-list',
  templateUrl: './vendors-list.component.html',
  styleUrls: ['./vendors-list.component.scss'],
})
export class VendorsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'phone', 'orderTimes', 'deliveryFlatRate'];
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(readonly http: HttpClient) {
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;

    this.http.get(`${environment.backend_url}/vendors`)
      .subscribe((vendors: Vendor[]) => {
        this.dataSource = new MatTableDataSource(vendors);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
