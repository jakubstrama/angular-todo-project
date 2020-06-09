import {ActionReducerMap} from '@ngrx/store';
import {TODOS_REDUCER} from './reducer/todo.reducer';


export const REDUCER: ActionReducerMap<any> = {
  'global.todos': TODOS_REDUCER
};
