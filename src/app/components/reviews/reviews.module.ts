import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReviewsComponent
  ],
  exports:[
    ReviewsComponent,
  ]
})
export class ReviewsModule { }
