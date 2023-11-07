import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ReviewsComponent } from './reviews.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReviewsComponent,
    NgOptimizedImage
  ],
  exports:[
    ReviewsComponent,
  ]
})
export class ReviewsModule { }
