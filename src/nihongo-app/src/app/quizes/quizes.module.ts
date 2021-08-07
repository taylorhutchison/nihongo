import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesContainerComponent } from './components/quizes-container/quizes-container.component';



@NgModule({
  declarations: [
    QuizesContainerComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule
  ]
})
export class QuizesModule { }
