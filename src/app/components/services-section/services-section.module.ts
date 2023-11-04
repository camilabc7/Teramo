import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA,
  ]
})
export class ServicesSectionModule { }
