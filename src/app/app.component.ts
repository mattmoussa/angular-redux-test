import { AppState } from './store';
import { CounterActions } from './app.actions';
import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() readonly count$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<AppState>,
    private actions: CounterActions) { }

  increment() {
    this.ngRedux.dispatch(this.actions.increment());
  }
  decrement() {
    this.ngRedux.dispatch(this.actions.decrement());
  }
}
