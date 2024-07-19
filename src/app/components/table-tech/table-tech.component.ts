import {Component, OnInit} from '@angular/core';
import {HttpsFakeStoreApiService} from "../../services/https-fake-store-api.service";
import {Tech} from "../../entities/tech";
import {ReplaySubject} from "rxjs";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {TechService} from "../../services/tech.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-table-tech',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './table-tech.component.html',
  styleUrl: './table-tech.component.css'
})
export class TableTechComponent implements OnInit{

  private techService : TechService
  protected techs : Tech[] = []
  protected techsHold : Tech[] = []

  constructor(techService: TechService) {
    this.techService = techService;
  }

  ngOnInit(): void {
    this.loadTechs();
  }

  private loadTechs() {
    this.techService.getTechs().subscribe(response => {
      // can change by category
      this.techs = response
      // for hold the real existing techs
      this.techsHold = response
    })
  }

  protected onClickedRemoveOption(_id: number) {
    this.techService.removeTech(_id)
  }

  protected onClickedEditOption(techOld: Tech) {
    let techNew = new Tech(1020155,'Headphones Wireless','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',103.2,'https://i.ibb.co/zS3k6QB/headphone-1.webp','Headphones')
    this.techService.editTech(techOld,techNew)
  }

  protected onClickedAddOption(tech: Tech) {
    this.techService.addTech(tech)
  }

  protected onClickedSubmitSearchForm(searchForm: any) {
    // this.techService.getTechByCategory(category).subscribe(response => this.techs = response )
    let techByCategory = this.techsHold.filter(tech => tech.category == searchForm['category'])
    if (techByCategory.length == 0) {
      // give the default techs
      this.techs = this.techsHold
    } else {
      this.techs = techByCategory
      console.log(this.techs)
    }
  }
}
