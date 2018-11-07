import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  getRandomNumber(min, max) {
    const randomNumber: number = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  };

  getRandomNumbersArray(min, max, length) {
    const numbersArray: number[] = [];

    for (let i = 0; i < length; i++) {
      const value: number = this.getRandomNumber(min, max);
      numbersArray[i] = value;
    };
    return numbersArray;
  };
};
