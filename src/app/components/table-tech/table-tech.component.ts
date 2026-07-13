import {Component, OnInit} from '@angular/core';
import {Tech} from "../../entities/tech";
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

  private readonly techService : TechService
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
      this.techs = response  // can change by category
      this.techsHold = response // for hold the real existing techs
    })
  }

  protected onRemoveOption(_id: number) {
    this.techService.removeTech(_id)
  }

  protected onEditOption(techOld: Tech) {
    const techNew = new Tech(1020155,'Headphones Wireless','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.',103.2,'https://i.ibb.co/zS3k6QB/headphone-1.webp','Headphones')
    this.techService.editTech(techOld,techNew)
  }

  protected onAddOption(tech: Tech) {
    this.techService.addTech(tech)
  }

  protected onSubmitSearchForm(searchForm: any) {
    const techByCategory = this.techsHold.filter(tech => tech.category == searchForm['category'])
    if (techByCategory.length == 0) {
      this.techs = this.techsHold // give the default techs
    } else {
      this.techs = techByCategory
    }
  }
}
