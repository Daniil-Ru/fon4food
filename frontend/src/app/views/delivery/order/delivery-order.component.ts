import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-order',
  templateUrl: './delivery-order.component.html',
  styleUrls: ['./delivery-order.component.scss']
})
export class DeliveryOrderComponent implements OnInit {
  name = "";
  address = "";
  id = '';

  constructor(readonly activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');

        this.name = 'Kurt Kunde';
        this.address = "Am schönen Rain 30, Irgendwo";
  }

  save(){}
}
