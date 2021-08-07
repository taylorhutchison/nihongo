import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { MatModule } from '../mat/mat.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    HomeContainerComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    MatModule
  ]
})
export class HomeModule { }
