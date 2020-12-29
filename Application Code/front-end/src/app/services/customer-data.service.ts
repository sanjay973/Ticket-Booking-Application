import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/user';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  constructor(private http:HttpClient) { }
  baseUrl="http://localhost:8888/authenticate";
  getAll="http://localhost:8888/getRecords"
  registrationUrl="http://localhost:8888/addNewUser"
  newTicket="http://localhost:8888/addNewTicket"

user:User =new User(null,null)

  login(username,password):Observable<any>{
    this.user.username=username
    this.user.password=password
   return this.http.post(this.baseUrl,this.user,{responseType:'text'});
  }

  addNewUser(user){
    return this.http.post(this.registrationUrl,user,{responseType:'text' as 'json'});
  }

  addNewTicket(booking){
    return this.http.post(this.newTicket,booking,{responseType:'text' as 'json'})
  }
  
  async getData(){
     let data= await this.http.get(this.getAll);
     return data;
   }
}
