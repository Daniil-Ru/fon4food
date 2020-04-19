import { Component, OnInit } from '@angular/core';
import { AlertType } from 'src/app/components/alert/alert.model';

@Component({
  selector: 'f4f-set-pw',
  templateUrl: './set-pw.component.html',
  styleUrls: ['./set-pw.component.scss'],
})
export class SetPwComponent implements OnInit {
  readonly AlertType = AlertType;

  constructor() {
  }

  ngOnInit() {
  }

}
