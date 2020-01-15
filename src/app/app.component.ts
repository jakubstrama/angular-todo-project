import { Component } from '@angular/core';
import { Todo } from './model/todo.model';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  
  public showAllItems() {
    this.todoDataService.showAllItems();
  }

  public showActiveItems() {
    this.todoDataService.showActiveItems();
  }

  public showCompletedItems() {
    this.todoDataService.showCompletedItems();
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }


}
