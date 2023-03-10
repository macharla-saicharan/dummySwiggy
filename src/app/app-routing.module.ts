import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:'login', component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'orderDetails', component:OrderDetailsComponent},
  {path:'logout',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
