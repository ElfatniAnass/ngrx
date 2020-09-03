import { Counter, counterReducer } from '../store/reducers/counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface StoreInterface {
  counter: Counter;
}

export interface CustomAction {
  type: string;
  payload: any;
}

export const redusers: ActionReducerMap<StoreInterface> = { counter: counterReducer };
