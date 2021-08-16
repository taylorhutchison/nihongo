import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {

  @Input()
  front: string = '';

  @Input()
  back: string = '';

  side: 'front' | 'back' = 'front';

  constructor() { }

  ngOnInit(): void {
  }

  switchSides() {
    this.side = this.side === 'front' ? 'back' : 'front';
    console.log(this.side);
  }

}
