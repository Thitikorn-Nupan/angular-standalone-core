import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-decorator-child',
  standalone: true,
  imports: [
  ],
  templateUrl: './input-decorator-child.component.html',
  styleUrl: './input-decorator-child.component.css'
})
export class InputDecoratorChildComponent {

  // @Input() is an Angular decorator that marks a class property as an input property of the component.
  // The @Input decorator is used to pass data from a parent component to a child component.
  @Input() public email : string = '';
  @Input()  public username : string = '';

}
