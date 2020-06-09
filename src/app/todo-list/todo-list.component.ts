import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {Store} from '@ngrx/store';

import * as _ from 'lodash';

@Component({
  selector: '[app-todo-list]',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  public title: string;

  public newTodo: Todo = new Todo();
  public todos: Array<Todo> = [];
  public filteredTodos: Array<Todo> = [];

  constructor(private store: Store<any> ) {
  }

  ngOnInit(): void {
    this.store.select('global.todos').subscribe(value => {
        if (value) {
          this.todos = _.cloneDeep(value);
          this.showAllItems();
        }
      });
  }

  addTodo() {
    this.todos.push(new Todo(this.newTodo));
    this.pushList();
    this.newTodo = new Todo();
  }

  private pushList(): void {
    this.store.dispatch({type: 'PUSH_TODOS', payload: this.todos});
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = true;
    this.pushList();
  }

  removeTodo(deletedTodo: Todo) {
    this.todos = this.todos.filter(todo => todo !== deletedTodo);
    this.pushList();
  }

  public showAllItems() {
    this.filteredTodos = [...this.todos];
  }

  public showActiveItems() {
    this.filteredTodos = this.todos.filter(todo => !todo.complete);
  }

  public showCompletedItems() {
    this.filteredTodos = this.todos.filter(todo => todo.complete);
  }


}
