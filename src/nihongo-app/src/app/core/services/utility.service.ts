import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  randomizeCharacters(characters: Array<[string, string]>): Array<[string, string]> {
    const randomizedArray = new Array<[string, string]>(characters.length);
    let randomIndex = Math.floor(Math.random() * characters.length);
    let spaceMin = Math.floor(characters.length/2);
    let spaceMax = characters.length - spaceMin + 1;
    let randomSpace = Math.floor(Math.random() * spaceMax) + spaceMin;
    for(let i = 0; i < characters.length; i++) {
      while(randomizedArray[randomIndex] != undefined) {
        randomIndex = (randomIndex + randomSpace) % characters.length;
        randomSpace = randomSpace > 1 ? randomSpace - 1 : 1;
      }
      randomizedArray[randomIndex] = characters[i];
      randomIndex = (randomIndex + randomSpace) % characters.length;
    }
    return randomizedArray;
  }
}
