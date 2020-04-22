import { OnDestroy } from "@angular/core";
import { Subject } from "rxjs/index";

export abstract class ObservableCleanup implements OnDestroy {
  protected destroyed$ = new Subject<boolean>();

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
