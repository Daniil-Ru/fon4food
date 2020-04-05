import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'f4f-vendor-order',
  templateUrl: './vendor-order.component.html',
  styleUrls: ['./vendor-order.component.scss'],
})
export class VendorOrderComponent implements OnInit {
  id = '';

  customer = {
    firstName: '',
    lastName: '',
    address: '',
    zipCode: '',
    city: '',
    notes: '',
  };

  constructor(readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.customer.firstName = 'Kurt';
      this.customer.lastName = 'Kunde';
      this.customer.address = 'Am schönen Rain 30, Irgendwo';
      this.customer.zipCode = '23452';
      this.customer.city = 'Nordstadt';
      this.customer.notes = 'Vorsicht Hund!';
    }
  }

  save(){
    console.log(this.customer);
  }
}
