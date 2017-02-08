import { CounterActions } from './app.actions';
import { Action } from 'redux';

export interface AppState {
  count: number;
}

export const INITIAL_STATE: AppState = {
  count: 0,
};

export function rootReducer(lastState: AppState, action: Action): AppState {
  switch (action.type) {
    case CounterActions.INCREMENT: return { count: lastState.count + 1 };
    case CounterActions.DECREMENT: return { count: lastState.count - 1 };
  }

  // We don't care about any other actions right now.
  return lastState;
}