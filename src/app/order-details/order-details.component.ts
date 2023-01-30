import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  orders! :any[];
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.http.get<any>('https://food-3642d-default-rtdb.firebaseio.com/orders.json').pipe(map((response)=>{
      const orderList = [];
      for(const key in response){
        if(response.hasOwnProperty(key) ){
          orderList.push({...response[key],id:key});
          // products.push({response})
        }
      }
      return orderList;
    })) .subscribe({
      next:(data)=>{
       
        this.orders = data;
         console.log(this.orders);
      }
    })
  }

}
