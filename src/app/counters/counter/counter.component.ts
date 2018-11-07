import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

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

  @Output() counterAction = new EventEmitter<Counter>();

  ngOnInit() {
    this.stepValue = this.counterData['stepValue'];
  };

  onIncrease(){
    this.counterAction.emit({
      changeValue: this.stepValue,
      actionType: 'increase'
    });
  };

  onDecrease() {
    this.counterAction.emit({
      changeValue: this.stepValue,
      actionType: 'decrease'
    });
  };
};
