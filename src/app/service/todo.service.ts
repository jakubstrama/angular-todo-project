import { Todo } from '../model/todo.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  lastId: number = 0;

  todos: Todo[] = [];
  todosToShow: Todo[] = [];

  constructor() {
  }

  public addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    this.todosToShow.push(todo);
    return this;
  }

  public deleteTodoById(id: number): TodoService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);

    this.todosToShow = this.todosToShow
      .filter(todo => todo.id !== id);
    return this;
  }

  public updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  public getAllTodos(): Todo[] {
    return this.todosToShow;
  }

  public getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  public toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }


  public showAllItems() {
    this.todosToShow = this.todos;
  }

  public showActiveItems() {
    this.todosToShow = this.todos
      .filter(todo => !todo.complete);
  }

  public showCompletedItems() {
    this.todosToShow = this.todos
      .filter(todo => todo.complete);
  }

}