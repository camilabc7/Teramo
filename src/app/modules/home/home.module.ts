import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page.component';
import { ServicesSectionComponent } from 'src/app/services-section/services-section.component';
import { ReviewsComponent } from 'src/app/reviews/reviews.component';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReviewsComponent,
    ServicesSectionComponent,
  ]
})
export class HomeModule { }
