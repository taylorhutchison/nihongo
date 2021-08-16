import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character.service';

@Component({
  selector: 'app-practice-container',
  templateUrl: './practice-container.component.html',
  styleUrls: ['./practice-container.component.scss']
})
export class PracticeContainerComponent implements OnInit {

  characters: any;

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.characters.subscribe(characters => {
      this.characters = characters;
    });
  }

}
