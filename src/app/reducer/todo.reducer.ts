import {Todo} from '../model/todo.model';


export function TODOS_REDUCER(state: Array<Todo>, {type, payload}) {
  switch (type) {
    case 'PUSH_TODOS':
      return payload;
    default:
      return state;
  }
}
