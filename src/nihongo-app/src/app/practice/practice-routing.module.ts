import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeContainerComponent } from './components/practice-container/practice-container.component';

const routes: Routes = [
  { path: '', component: PracticeContainerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
