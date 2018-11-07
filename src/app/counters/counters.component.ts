import { Component, OnInit } from '@angular/core';
import { RandomNumberService } from '../shared/random-number.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

interface CounterConfig {
  startingValue: number;
  stepValue: number
}

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  
  start: number = 1;
  end: number = 44;
  arrayLength: number = 10;

  startingValue: number;
  stepValue: number;

  counterData: CounterConfig = {
    startingValue: this.startingValue,
    stepValue: this.stepValue
  };

  countersArray: CounterConfig[];

  constructor(private randomNumber: RandomNumberService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {

    this.route.params.subscribe((params: Params) => this.start = +params.start)
    this.route.queryParams.subscribe((params: Params) => this.end = +params.end);

    const min: number = +this.start;
    const max: number = +this.end;

    if (!max) {
      this.router.navigate(['wrong-address']);
    };

    this.countersArray = this.randomNumber.getRandomNumbersArray(min, max, this.arrayLength)
      .map(el => this.counterData = {
        startingValue: el,
        stepValue: this.randomNumber.getRandomNumber(2, 15)
      });
  };

  updateArray($event, i) {
    const index = i;
    const changeValue = $event.changeValue;
    const actionType = $event.actionType;

    if (actionType === 'increase') {
      this.countersArray[index].startingValue += changeValue;
    } else if (actionType === 'decrease') {
      this.countersArray[index].startingValue -= changeValue;
    };
  };
};
