import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { RandomNumberService } from '../random-number.service';

interface Counter {
  changeValue: number,
  actionType: string
};

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  changeValue: number;

  @Input() startValue: number;

  @Output() increase = new EventEmitter<Counter>();
  @Output() decrease = new EventEmitter<Counter>();

  constructor(private randomNumber: RandomNumberService) {};

  ngOnInit() {
    this.changeValue = this.randomNumber.getRandomNumber(2,15);
  };

  onIncrease(){
    this.increase.emit({
      changeValue: this.changeValue,
      actionType: 'increase'
    });
  };

  onDecrease() {
    this.increase.emit({
      changeValue: this.changeValue,
      actionType: 'decrease'
    });
  };

};
