import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TodoItem } from '../todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoItems: TodoItem[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodoItems();
  }

  loadTodoItems(): void {
    this.todoService.getTodoItems().subscribe(items => {
      this.todoItems = items;
    });
  }
}
