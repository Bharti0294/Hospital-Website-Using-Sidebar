import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { TeamComponent } from './team/team.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { PricingComponent } from './pricing/pricing.component';
import { DepartmentComponent } from './department/department.component';
import { BlogComponent } from './blog/blog.component';
import { GallaryComponent } from './gallary/gallary.component';
import { LocationComponent } from './location/location.component';
import { ReviewComponent } from './review/review.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServiceComponent,
    ContactComponent,
   AppointmentComponent,
   
   TeamComponent,
   TestimonialsComponent,
   FacilitiesComponent,
   PricingComponent,
   DepartmentComponent,
   BlogComponent,
   GallaryComponent,
   LocationComponent,
   ReviewComponent,
   DoctorsComponent,
   FooterComponent,
   SidebarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
