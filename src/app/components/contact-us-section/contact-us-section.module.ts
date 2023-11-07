import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { ContactUsSectionComponent } from './contact-us-section.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContactUsSectionComponent,
    NgOptimizedImage
  ],
  exports:[
    ContactUsSectionComponent,
  ]
})
export class ContactUsSectionModule { }
