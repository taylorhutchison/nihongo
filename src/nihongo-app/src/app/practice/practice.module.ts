import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeContainerComponent } from './components/practice-container/practice-container.component';
import { SelectComponent } from './components/select/select.component';
import { MatModule } from '../mat/mat.module';
import { HirganaContainerComponent } from './components/hiragana/hiragana-container/hiragana-practice.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';



@NgModule({
  declarations: [
    PracticeContainerComponent,
    SelectComponent,
    HirganaContainerComponent,
    FlashcardComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    MatModule
  ]
})
export class PracticeModule { }
