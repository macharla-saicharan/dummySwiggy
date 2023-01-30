import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public srvc: LoginService,public rtr : Router) { }
  myimage:string="assets/bg.jpg";

  ngOnInit(): void {
  }
  loginform= new FormGroup({
    uname : new FormControl(),
    pwd : new FormControl()
  })
  Checkuser(){
    alert("Login Succesfull...");
   var res = this.srvc.validateUser(this.loginform.value['uname'],this.loginform.value['pwd'])
   if(res){
    this.rtr.navigate(["home"])
   }
   else{
      alert("Invalid User...");
   }
  }
  



}
