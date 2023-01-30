import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public rtr:Router) { }

  ngOnInit(): void {
  }
  ordernow(){
    this.rtr.navigate(["menu"])
  }
  logout(){
    this.rtr.navigate(["logout"])
  }
  home(){
    this.rtr.navigate(["home"])
  }
  

}
