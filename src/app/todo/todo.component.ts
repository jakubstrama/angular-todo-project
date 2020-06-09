import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input()
  public todo: Todo;

  @Output()
  public complete = new EventEmitter<Todo>();

  @Output()
  public delete = new EventEmitter<Todo>();


  public completeTodo() {
    this.complete.emit(this.todo);
  }

  public deleteTodo() {
    this.delete.emit(this.todo);
  }

}
