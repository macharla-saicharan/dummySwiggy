import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  constructor() { }

  hotels:any[] = [
    {   RestaurantName : "KFC",
    items : [
       {itemName:"chicken",
      price:455,itemtype:"Non-Veg"},
      {itemName:"mutton",
      price:45,itemtype:"Non-Veg"},
      {itemName:"fish",
      price:45,itemtype:"Non-Veg"}
    ]
 },
 {   RestaurantName : "PIZAA HUT",
 items : [
    {itemName:"chicken",
   price:455,itemtype:"Non-Veg"},
   {itemName:"mutton",
   price:45,itemtype:"Non-Veg"},
   {itemName:"fish",
   price:45,itemtype:"Non-Veg"}]
}, 

{   RestaurantName : "PARADISE",
items : [
 {itemName:"chicken",
price:455,itemtype:"Non-Veg"},
{itemName:"mutton",
price:45,itemtype:"Non-Veg"},
{itemName:"fish",
price:45,itemtype:"Non-Veg"}]
}, 

{   RestaurantName : "EATERS STOP",
items : [
{itemName:"chicken",
price:455,itemtype:"Non-Veg"},
{itemName:"mutton",
price:45,itemtype:"Non-Veg"},
{itemName:"fish",
price:45,itemtype:"Non-Veg"}]
},

{   RestaurantName : "MANDI",
items : [
{itemName:"chicken",
price:455,itemtype:"Non-Veg"},
{itemName:"mutton",
price:45,itemtype:"Non-Veg"},
{itemName:"fish",
price:45,itemtype:"Non-Veg"}]
},

{   RestaurantName : "ALPHAA",
items : [
{itemName:"chicken",
price:455,itemtype:"Non-Veg"},
{itemName:"mutton",
price:45,itemtype:"Non-Veg"},
{itemName:"fish",
price:45,itemtype:"Non-Veg"}]
}
  ]
}
