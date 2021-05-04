import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import {ServiceComponent} from './service/service.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {ContactComponent} from './contact/contact.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {TeamComponent} from './team/team.component';
import {DepartmentComponent} from './department/department.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {FacilitiesComponent} from './facilities/facilities.component';
import {PricingComponent} from './pricing/pricing.component';
import {GallaryComponent} from './gallary/gallary.component';
import {BlogComponent} from './blog/blog.component';
import {ReviewComponent} from './review/review.component';
import {LocationComponent} from './location/location.component';


const routes: Routes = [

  {
    path:"home",
    component:HomeComponent
  },

  {
    path:"aboutus",
    component:AboutusComponent
  },
  
  {
    path:"service",
    component:ServiceComponent
  },
  
  {
    path:"appointment",
    component:AppointmentComponent
  },
  
  {
    path:"contact",
    component:ContactComponent
  },

  
  {
    path:"doctors",
    component:DoctorsComponent
  },
  {
    path:"team",
    component:TeamComponent
  },
  {
    path:"department",
    component:DepartmentComponent
  },
  {
    path:"testimonials",
    component:TestimonialsComponent
  },
  {
    path:"facilities",
    component:FacilitiesComponent
  },
  {
    path:"pricing",
    component:PricingComponent
  },
  {
    path:"gallary",
    component:GallaryComponent
  },
  {
    path:"blog",
    component:BlogComponent
  },
  
  {
    path:"review",
    component:ReviewComponent
  },
  {
    path:"location",
    component:LocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
