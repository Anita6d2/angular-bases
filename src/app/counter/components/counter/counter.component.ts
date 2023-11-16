import{Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

  <button type="button" (click)="increaseBy(1)">+1</button>
  <button type="button" (click)="resetCounter(10)">Reset</button>
  <button type="button" (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent{

  public counter: number = 10;

  constructor(){

  }

  increaseBy(value:number):void{
    this.counter += value;
  }

  resetCounter(value:number):void{
    this.counter = value;
  }

}
