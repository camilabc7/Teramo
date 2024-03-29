import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsPageComponent } from './about-us-page.component';
import { ReviewsComponent } from 'src/app/components/reviews/reviews.component';


@NgModule({
  declarations: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ReviewsComponent,
    NgOptimizedImage

  ]
})
export class AboutModule { }
