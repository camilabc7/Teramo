import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { ServicesSectionComponent } from 'src/app/components/services-section/services-section.component';
import { ServicePageComponent } from './service-page.component';


@NgModule({
  declarations: [
    ServicePageComponent,
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    ServicesSectionComponent,
    NgOptimizedImage
  ],

})
export class ServiceModule { }
