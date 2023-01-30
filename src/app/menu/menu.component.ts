import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HotelsService } from '../Services/hotels.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public rtr :Router,private hotelsService:HotelsService,private http:HttpClient) { }

  quantity!:string; 
  finalAmount! : number;
  priceMsg!:string;
  successMsg!:string;
  declineMsg!:string;

  // display conditions
  display1:boolean = true;
  display2:boolean = true;
  display3:boolean = true;

// message conditions
  msgCond1!:boolean;
  msgCond2!:boolean;
  msgCond3!:boolean;

  itemName!:any;
  presentItemName!:string;
  presentItemDetails!:any;
  hotels:any[] = this.hotelsService.hotels;
  // @ViewChild('itemName')
  ngOnInit(): void {

  }
  
  home(){
    this.rtr.navigate(["home"])
  }

  amountCalc(val:any,item:any) {
    // console.log(item);
    // console.log(val);

    this.presentItemDetails = item;
    console.log(this.presentItemDetails);
    
    
    this.presentItemName = item.itemName;
      // console.log( presentItemName);
  
    // this.display = false;

    switch(this.presentItemName) {
      case ('chicken') : {
              console.log('chicken');
              this.display1 = false;
              this.display2 = true;
              this.display3 = true;

      }
      break;
      case ('mutton') : {
              console.log('mutton');
              this.display1 = true;
              this.display2 = false;
              this.display3 = true;

      }
      break;
      case ('fish') : {
              console.log('fish');
              this.display1 = true;
              this.display2 = true;
              this.display3 = false;
      }
      break;
    }
    
    this.finalAmount = (item.price)*val;
    this.priceMsg = `The final amount is ${this.finalAmount}, do you want to confirm?`;

  }

  confirmation(val:any){
    this.successMsg = "Thanks, your booking is successful";
    // this.display = true;
    console.log(val);
    

    this.display1 = true;
    this.display2 = true;
    this.display3 = true;
     
    // this.msgCond = true;
 
    switch(this.presentItemName) {
      case ('chicken') : {
              console.log('chicken');
              this.msgCond1 = true;
              this.msgCond2 = false;
              this.msgCond3 = false;

      }
      break;
      case ('mutton') : {
              console.log('mutton');
              this.msgCond1 = false;
              this.msgCond2 = true;
              this.msgCond3 = false;

      }
      break;
      case ('fish') : {
              console.log('fish');
              this.msgCond1 = false;
              this.msgCond2 = false;
              this.msgCond3 = true;
      }
      break;
    }

    let database:any[] = [val.RestaurantName, this.presentItemDetails,this.finalAmount,]
    // console.log(val); 
    this.http.post('https://food-3642d-default-rtdb.firebaseio.com/orders.json',database).subscribe({
      next:()=>{
        alert('added to data base');
        
      },
      error:()=>{
        alert('erorr');
      }
    })
    setTimeout(() => {
          window.location.reload() ; 
      }, 3000);



  }
  decline(){
    this.declineMsg ="Ok.. your order is cancelled";
    this.display1 = true;
    this.display2 = true;
    this.display3 = true;

    // this.msgCond = false;

    switch(this.presentItemName) {
      case ('chicken') : {
              console.log('chicken');
              this.msgCond1 = false;
              this.msgCond2 = true;
              this.msgCond3 = true;

      }
      break;
      case ('mutton') : {
              console.log('mutton');
              this.msgCond1 = true;
              this.msgCond2 = false;
              this.msgCond3 = true;

      }
      break;
      case ('fish') : {
              console.log('fish');
              this.msgCond1 = true;
              this.msgCond2 = true;
              this.msgCond3 = false;
      }
      break;
    }

    // reLoad(){
    //   this.rtr.navigate([this.rtr.url])
    // }

    window.location.reload()  
  }
}
