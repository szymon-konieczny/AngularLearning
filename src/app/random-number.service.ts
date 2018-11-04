import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor() { };

  getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  getRandomNumbersArray(min, max, length) {
    const numbersArray = [];

    for (let i = 0; i < length; i++) {
      const value = this.getRandomNumber(min, max);
      numbersArray[i] = value;
    };
    return numbersArray;
  };
};
