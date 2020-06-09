import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TodoService} from './service/todo.service';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoComponent} from './todo/todo.component';
import {StoreModule} from '@ngrx/store';
import {REDUCER} from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(REDUCER)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
