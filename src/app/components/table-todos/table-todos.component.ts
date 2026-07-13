import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodosService} from "../../services/todos.service";
import {Todo} from "../../entities/todo";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-table-todos',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './table-todos.component.html',
  styleUrl: './table-todos.component.css'
})
// if refresh page any compoent will create new againt.
// OnInit , OnDestroy When the component is rendered to the template, these methods will run at the appropriate time. Of course, above all, the constructor runs first.
export class TableTodosComponent implements OnInit , OnDestroy {

  private readonly todosService: TodosService;
  protected todos: Todo[] = [];

  constructor(todosService: TodosService) {
    this.todosService = todosService;
  }

  // when this component close will dobut it means this class destroy this class will be  it just a life cycle of ag
  ngOnDestroy(): void {
    console.log('TableTodosComponent gonna destroy');
  }

  ngOnInit(): void {
    this.todosService.getTodos().subscribe(response => this.todos = response)
  }

  protected onClickedRemoveOption(id: number) {
    this.todosService.removeTodo(id)
  }

}
