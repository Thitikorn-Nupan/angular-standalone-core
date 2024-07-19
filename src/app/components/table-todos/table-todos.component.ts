import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {TodosService} from "../../services/todos.service";
import {Todo} from "../../entities/todo";
import {HttpsFakeStoreApiService} from "../../services/https-fake-store-api.service";
import {NgForOf} from "@angular/common";
import {response} from "express";

@Component({
  selector: 'app-table-todos',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table-todos.component.html',
  styleUrl: './table-todos.component.css'
})
// if refresh page any compoent will create new againt
// OnInit , OnDestroy When the component is rendered to the template, these methods will run at the appropriate time. Of course, above all, the constructor runs first.
export class TableTodosComponent implements OnInit , OnDestroy {

  protected todos: Todo[] = [];

  private todosService: TodosService;

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  ngOnDestroy(): void {
    // when this component close will dobut it means this class destroy this class will be
    // it just a life cycle of ag
    console.log('TableTodosComponent gonna destroy');
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(response => this.todos = response)
  }

  protected onClickedRemoveOption(id: number) {
    this.todosService.removeTodo(id)
  }

}
