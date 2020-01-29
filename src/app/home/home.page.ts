import { Component } from '@angular/core';
import {GetAllTodosFromJson} from '../../../DDD/application/GetAllTodosFromJson';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todos:any[];

  constructor() {
    const getAllTodos = new GetAllTodosFromJson();
    const allTodos = getAllTodos.getAllTodos();
    this.todos = allTodos;
  }

}
