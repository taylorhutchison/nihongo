import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Characters } from 'src/app/core/interfaces/characters';
import { CharacterService } from 'src/app/core/services/character.service';
import { UtilityService } from 'src/app/core/services/utility.service';
@Component({
  selector: 'app-hiragana-practice',
  templateUrl: './hiragana-practice.component.html',
  styleUrls: ['./hiragana-practice.component.scss']
})
export class HirganaContainerComponent implements OnInit {

  characters: Characters | null = null;
  hiragana: Array<[string, string]> | null = null;

  destroyed$ = new Subject<void>();

  constructor(private charactersService: CharacterService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.charactersService.characters
    .pipe(takeUntil(this.destroyed$))
    .subscribe(characters => {
      this.characters = characters;
      this.hiragana = this.utilityService.randomizeCharacters(characters!.hiragana);
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

}


