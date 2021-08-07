import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeContainerComponent } from './components/practice-container/practice-container.component';



@NgModule({
  declarations: [
    PracticeContainerComponent
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule
  ]
})
export class PracticeModule { }
