import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from './random-number.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  startRange: number = 1;
  endRange: number = 44;
  arrayLength: number = 10;

  numbersArray: number[];
  
  constructor(private randomNumber: RandomNumberService) {};

  ngOnInit() {
    this.numbersArray = this.randomNumber.getRandomNumbersArray(this.startRange, this.endRange, this.arrayLength);
  };

  onArrayUpdate($event, i) {
    const index = i;
    const changeValue = $event.changeValue;
    const actionType = $event.actionType;

    if (actionType === 'increase') {
      this.numbersArray[index] += changeValue;
    } else if (actionType === 'decrease') {
      this.numbersArray[index] -= changeValue;
    };

    console.log(this.numbersArray);
  }
};
