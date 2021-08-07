import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesContainerComponent } from './components/quizes-container/quizes-container.component';

const routes: Routes = [
  { path: '', component: QuizesContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule { }
