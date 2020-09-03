import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreInterface, } from './store/store';
import { IncreamentAction, DecreamentAction } from './store/actions/counter.action';
import { nSelector } from './store/reducers/counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;

  constructor(private store: Store<StoreInterface>) {
    this.store.select(nSelector).subscribe(data => this.count = data);
  }

  increament() {
    this.store.dispatch(new IncreamentAction(2));
  }

  decreament() {
    this.store.dispatch(new DecreamentAction(2));
  }

}
