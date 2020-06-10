import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public title: string;

  @Input()
  public todo: Todo;

  @Output()
  public complete = new EventEmitter<Todo>();

  @Output()
  public delete = new EventEmitter<Todo>();

  @Output()
  public edit = new EventEmitter<TodoEdit>();

  ngOnInit(): void {
    this.title = this.todo.title;
  }

  public completeTodo() {
    this.complete.emit(this.todo);
  }

  public deleteTodo() {
    this.delete.emit(this.todo);
  }

  public editTodo() {
    this.edit.emit({todo: this.todo, title: this.title});
  }

}

export interface TodoEdit {
  todo: Todo;
  title: string;
}
