import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'f4f-set-pw',
  templateUrl: './set-pw.component.html',
  styleUrls: ['./set-pw.component.scss'],
})
export class SetPwComponent implements OnInit {
  readonly faError = faTimesCircle;

  constructor() {
  }

  ngOnInit() {
  }

}
