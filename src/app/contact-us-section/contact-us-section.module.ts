import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsSectionComponent } from './contact-us-section.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ContactUsSectionComponent
  ],
  exports:[
    ContactUsSectionComponent,
  ]
})
export class ContactUsSectionModule { }
