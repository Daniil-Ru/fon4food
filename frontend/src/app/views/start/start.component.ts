import { Component, OnInit } from '@angular/core';
import {ROLES, UserService} from '../../services/user.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'f4f-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  userRoles$: Observable<string[]>;
  readonly ROLES = ROLES;

  constructor(readonly userService: UserService) {
    this.userRoles$ = userService.roles$;
  }

  ngOnInit(): void {
  }

}
