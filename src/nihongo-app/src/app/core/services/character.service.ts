import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Characters } from '../interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters = new BehaviorSubject<Characters | null>(null);

  constructor(private http: HttpClient) { }

  load() {
    this.http.get<Characters>('assets/characters.json').subscribe(characters => {
      this.characters.next(characters);
    });
  }
}
