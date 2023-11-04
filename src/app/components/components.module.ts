import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ContactUsSectionComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    ContactUsSectionComponent
  ]
})
export class ComponentsModule { }
