import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HirganaContainerComponent } from './components/hiragana/hiragana-container/hiragana-practice.component';
import { PracticeContainerComponent } from './components/practice-container/practice-container.component';
import { SelectComponent } from './components/select/select.component';

const routes: Routes = [
  {
    path: '', component: PracticeContainerComponent,
    children: [
      {
        path: '', // child route path
        component: SelectComponent, // child route component that the router renders
      },
      {
        path: 'hiragana-characters',
        component: HirganaContainerComponent
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
