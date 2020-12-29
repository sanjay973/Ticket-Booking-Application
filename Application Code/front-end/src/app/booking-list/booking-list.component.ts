import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../services/customer-data.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { analyzeFile } from '@angular/compiler';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  constructor(private service:CustomerDataService,
    private router:Router) { }
users:any=[];
 async  ngOnInit() {
    return (await this.service.getData()).subscribe(data=>{
      this.users=data
    })
  }
    logout(){
      var result=confirm("Are you sure want to logout") 
      if(result){
    sessionStorage.removeItem('token');
    this.router.navigate([''])
      }else{
        this.router.navigate(['details'])
      }
  }
}
