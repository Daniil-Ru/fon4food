import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";
import { map, mergeMap, takeUntil } from "rxjs/internal/operators";
import { ObservableCleanup } from "../../utils/ObservableCleanup";

@Component({
  selector: 'f4f-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss'],
})
export class LegalComponent extends ObservableCleanup {

  legalNotice = '';

  constructor(readonly activatedRoute: ActivatedRoute, readonly http: HttpClient) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(paramMap => paramMap.get('doc')),
        mergeMap(doc =>
          this.http.get(`assets/legal/${doc}.html`, {responseType: 'text'})
        ),
        takeUntil(this.destroyed$))
      .subscribe(
        (content: string) => {
          this.legalNotice = content;
        }
      );
  }

}
