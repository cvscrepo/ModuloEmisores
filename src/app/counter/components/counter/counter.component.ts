import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})

export class CounterComponet {
  constructor() { }

  public counter: number = 10;


  public increaseBy(value: number): void {
    if (this.counter >= 1) {
      this.counter += value;
    }
  };
  public resetBy(): void {
    this.counter = 10;
  };
}
