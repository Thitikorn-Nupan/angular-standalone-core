import {Injectable} from '@angular/core';
import {HttpsFakeStoreApiService} from "./https-fake-store-api.service";
import {ReplaySubject} from "rxjs";
import {Tech} from "../entities/tech";

@Injectable({
  providedIn: 'root'
})
export class TechService {

  private httpsFakeStoreApiService: HttpsFakeStoreApiService;

  private techList = new ReplaySubject<Tech[]>();
  private techs: Tech[] = [] // just entity

  constructor(httpsFakeStoreApiService: HttpsFakeStoreApiService) {
    this.httpsFakeStoreApiService = httpsFakeStoreApiService;
    this.initialTechList();
  }

  private initialTechList() {
    this.httpsFakeStoreApiService.retrieveTech().subscribe(
      response => {
        this.techs = response;
        this.techList.next(this.techs);
      })
  }

  public getTechs() {
    return this.techList;
  }

  public removeTech(id: number) {
    // find index by object
    let techExists = this.techs.find(tech => tech._id === id);
    // then remove it by index
    this.techs.splice(this.techs.indexOf(techExists!), 1);
    // *** have to update students on studentList.next(data)
    // cause students was changed
    this.techList.next(this.techs);
  }

  public editTech(techOld: Tech, tech: Tech): void {
    // find index by object
    let index = this.techs.indexOf(techOld);
    // replace object at the same position it was stayed
    this.techs[index] = tech;
    // updated
    this.techList.next(this.techs);
  }

  public addTech(tech: Tech) {
    this.techs.push(tech)
    // updated
    this.techList.next(this.techs);
  }

}
