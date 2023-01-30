import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rtr : Router) { }

  ngOnInit(): void {
  }
  ordernow(){
    this.rtr.navigate(["menu"])
  }
   

  // databasse link -- https://food-3642d-default-rtdb.firebaseio.com/
}
