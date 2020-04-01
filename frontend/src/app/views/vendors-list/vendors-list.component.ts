import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { faClock, faCoins, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

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
  vendors: Vendor[] = [];
  zipExp = '';

  readonly faPhone = faPhoneAlt;
  readonly faAddress = faMapMarkerAlt;
  readonly faTime = faClock;
  readonly faRate = faCoins;

  constructor(readonly http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(`${environment.backend_url}/vendors`)
      .subscribe((vendors: Vendor[]) => {
        this.vendors = vendors;
      });
  }
}
