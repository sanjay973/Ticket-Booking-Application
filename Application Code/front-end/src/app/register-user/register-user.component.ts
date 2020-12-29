import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../services/customer-data.service';
import { User } from 'src/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})


export class RegisterUserComponent implements OnInit {
  constructor(private service:CustomerDataService) { }
  user:User=new User("","");
  ngOnInit(): void {

  }

  registerNewUser(){
    this.service.addNewUser(this.user).subscribe(data=>{
      console.log("user create succesfully")
    })
  }
  

}
