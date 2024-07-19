import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InputDecoratorChildComponent} from "../input-decorator-child/input-decorator-child.component";

@Component({
  selector: 'app-input-decorator-parent',
  standalone: true,
  imports: [
    FormsModule,
    InputDecoratorChildComponent,
  ],
  templateUrl: './input-decorator-parent.component.html',
  styleUrl: './input-decorator-parent.component.css'
})
export class InputDecoratorParentComponent {

  public email : string = '';
  public username : string = '';


}
