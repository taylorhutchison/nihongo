import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { MatModule } from './mat/mat.module';
import { PracticeModule } from './practice/practice.module';
import { QuizesModule } from './quizes/quizes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    HomeModule,
    PracticeModule,
    QuizesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
