import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() index: number;
  @Input() startValue: number;

  @Output() increment = new EventEmitter<{ counterState: number, index: number }>();
  @Output() decrement = new EventEmitter<{ counterState: number, index: number }>();
  @Output() reset = new EventEmitter<{ counterState: number, index: number }>();

  counterIndex: number = this.index;
  defaultStep: number;
  counterValue: number = this.startValue;

  constructor() {};

  ngOnInit() {
    this.defaultStep = this.startValue;
    this.handleSetState();
  }

  handleSetState() {
    this.counterValue = this.defaultStep;
  }

  handleIncrement(){
    this.counterValue += this.defaultStep;
    this.increment.emit({
      counterState: this.counterValue,
      index: this.index
    });
    
  }

  handleDecrement() {
    this.counterValue -= this.defaultStep;
    this.increment.emit({
      counterState: this.counterValue,
      index: this.index
    });
  }

  handleReset() {
    this.counterValue = this.defaultStep;
    this.reset.emit({
      counterState: this.counterValue,
      index: this.index 
    });
  }
  
}
