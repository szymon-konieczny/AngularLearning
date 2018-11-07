import { Component, Input, EventEmitter, Output, OnInit, SimpleChanges } from '@angular/core';

interface Counter {
  startingValue?: number,
  changeValue: number,
  actionType: string
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  stepValue: number;

  @Input() counterData: Counter;

  @Output() increase = new EventEmitter<Counter>();
  @Output() decrease = new EventEmitter<Counter>();

  ngOnInit() {
    this.stepValue = this.counterData['stepValue'];
  };

  onIncrease(){
    this.increase.emit({
      changeValue: this.stepValue,
      actionType: 'increase'
    });
  };

  onDecrease() {
    this.increase.emit({
      changeValue: this.stepValue,
      actionType: 'decrease'
    });
  };

};
