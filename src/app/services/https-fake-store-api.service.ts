import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "node:http";
import {Observable} from "rxjs";
import {Todo} from "../entities/todo";
import {Tech} from "../entities/tech";

@Injectable({
  providedIn: 'root'
})
export class HttpsFakeStoreApiService {
  private http: HttpClient
  private readonly fakeStoreApi = "https://fakestoreapiserver.reactbd.com" // 200
  private readonly fakeStoreApiTodos = "https://fakestoreapiserver.reactbd.com/todos" // 200
  private readonly fakeStoreApiTech = "https://fakestoreapiserver.reactbd.com/tech" // 200

  constructor(http: HttpClient) {
    this.http = http;
  }
  public retrieveTodos() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.fakeStoreApi}/todos`)
  }
  public retrieveTech() : Observable<Tech[]> {
    return this.http.get<Tech[]>(`${this.fakeStoreApi}/tech`)
  }
}
