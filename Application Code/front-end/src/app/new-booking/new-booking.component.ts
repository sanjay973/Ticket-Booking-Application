import { Component, OnInit } from '@angular/core';
import { UserBooking } from '../booking-info';
import { CustomerDataService } from '../services/customer-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.css']
})
export class NewBookingComponent implements OnInit {

  constructor(private service:CustomerDataService,private router:Router) { }
  booking:UserBooking=new UserBooking("","","",0)
  ngOnInit(): void {
  }

  registerUser(booking){
      this.service.addNewTicket(booking).subscribe(data=>{
          this.router.navigate(['details'])
        console.log("ticket generated succesfully")
      },()=>{
        console.log("error occured")
      })
  }
}
