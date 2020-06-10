import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {TodoEdit} from '../todo/todo.component';

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

  editTodo(editedTodo: TodoEdit) {
    const match = this.todos.filter(t => t === editedTodo.todo)[0];
    match.title = editedTodo.title;
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
