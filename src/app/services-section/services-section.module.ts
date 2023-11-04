import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesSectionComponent } from './services-section.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ServicesSectionComponent,
  ],
  exports:[
    ServicesSectionComponent,
  ]
})
export class ServicesSectionModule { }
