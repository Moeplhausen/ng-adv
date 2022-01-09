import { Injectable } from '@angular/core';
import { DemoState } from './demos.reducer';
import { Store } from '@ngrx/store';
import { applyFilter, loadDemos } from './demos.actions';
import { tap } from 'rxjs/internal/operators/tap';
import { getAllDemos } from './demo.selectors';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  constructor(private store: Store<DemoState>) {}

  initData() {
    this.store.dispatch(loadDemos());
  }

  getDemos() {
    return this.store
      .select(getAllDemos)
      .pipe(tap((data) => console.log('data received from store', data)));
  }

  setFilter(filter: string) {
    this.store.dispatch(applyFilter({ filter }));
  }
}
