import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsSectionModule } from './contact-us-section/contact-us-section.module';
import { HomeModule } from './modules/home/home.module';
import { ContactModule } from './modules/contact/contact.module';
import { ServiceModule } from './modules/service/service.module';
import { AboutModule } from './modules/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    HomeModule,
    ContactModule,
    ServiceModule,
    AboutModule,
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    ContactUsSectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
