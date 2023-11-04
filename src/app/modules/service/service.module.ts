import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServicesSectionComponent } from 'src/app/services-section/services-section.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ServicesSectionComponent,
  ],

})
export class ServiceModule { }
