import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  addTodo() {
    this.todos.push(new Todo(this.newTodo));
    this.newTodo = new Todo();
    this.showAllItems();
  }


  toggleTodoComplete(todo: Todo) {
    todo.complete = true;
    this.showAllItems();
  }

  removeTodo(deletedTodo: Todo) {
    this.todos = this.todos.filter(todo => todo !== deletedTodo);
    this.showAllItems();
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
