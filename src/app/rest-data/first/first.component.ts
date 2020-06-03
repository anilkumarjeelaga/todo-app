import { Component, OnInit } from '@angular/core';
// import { TodoService } from 'src/app/todos/todo.service';
import { TodoService } from 'src/app/todos/todos-list/todo.service';

import { ITodo } from '../../interfaces/todo';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  todos: ITodo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data: ITodo[]) => {
      this.todos = data;
      console.log('items Recevied', this.todos);
    });
  }
}
