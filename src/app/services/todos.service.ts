import {inject, Injectable, OnDestroy, OnInit} from '@angular/core';
import {ReplaySubject} from "rxjs";
import {Todo} from "../entities/todo";
import {HttpsFakeStoreApiService} from "./https-fake-store-api.service";
import {response} from "express";

@Injectable({
  providedIn: 'root'
})
export class TodosService{

  private todos: Todo[] = [];
  private todosList = new ReplaySubject<Todo[]>();
  private httpsFakeStoreApiService: HttpsFakeStoreApiService;

  constructor() {
    // can inject like this
    this.httpsFakeStoreApiService = inject(HttpsFakeStoreApiService);
    // onInt not work
    this.httpsFakeStoreApiService.retrieveTodos().subscribe(response => {
      this.todos = response;
      // and publish todos to todosList
      this.todosList.next(this.todos)
    })
  }

  public getTodos() {
    return this.todosList
  }

  public removeTodo(id: number) : void {
    // find student by id
    let todoExists = this.todos.find(todo => todo.id === id);
    // then remove it by index
    // array.splice(startIndex, numberOfElementsToBeDeleted);
    this.todos.splice(this.todos.indexOf(todoExists!), 1);
    // *** have to update students on studentList.next(data)
    // cause students was changed
    this.todosList.next(this.todos);
  }



}
