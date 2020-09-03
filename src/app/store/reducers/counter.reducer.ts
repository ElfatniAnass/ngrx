import { CustomAction } from '../store';
import { increament, decreament } from '../actions/counter.action';
import { createFeatureSelector, createSelector, State } from '@ngrx/store';

export interface Counter { n: number; }
let initialState = { n: 0 };

export function counterReducer(state = initialState, action: CustomAction) {
  switch (action.type) {
    case increament :
      return {
        n: state.n + action.payload
      };
    case decreament :
      return {
        n: state.n - action.payload
      };
    default:
      return state;
  }
}

let counterFetshSelector = createFeatureSelector<Counter>('counter');
export let nSelector = createSelector(counterFetshSelector, state => state.n);
