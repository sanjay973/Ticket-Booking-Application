import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../services/customer-data.service';
import { Router } from '@angular/router';
import { User } from 'src/user';
import { async } from '@angular/core/testing';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string
password:string
message:string

  constructor(private service:CustomerDataService,private router:Router) { }
flag:boolean=true
  ngOnInit() {
  
  }

  doLogin(){
    this.service.login(this.username,this.password).subscribe(data=>{
      sessionStorage.setItem('token',data)
      this.router.navigate(['details']);
      console.log(data)
    },(error)=>{
        this.message="Invalid username or password"
    })
  }
  
}
