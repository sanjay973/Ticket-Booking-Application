import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { NewBookingComponent } from './new-booking/new-booking.component';
import { ShowpageComponent } from './showpage/showpage.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"userprofile",component:ShowpageComponent},
  {path:"register",component:RegisterUserComponent},
  {path:"details",component:BookingListComponent},
  {path:"newTicket",component:NewBookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
