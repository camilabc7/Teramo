import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../app/modules/contact/contact.module').then(m => m.ContactModule),
    title: 'Contact Us'
  },
  {
    path: 'services',
    loadChildren: () => import('../app/modules/service/service.module').then(m => m.ServiceModule),
    title: 'Services'
  },
  {
    path: 'home',
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () => import('../app/modules/about/about.module').then(m => m.AboutModule),
    title: 'About Us'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }

