import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { OrderListComponent } from './modules/orders/order-list/order-list.component';
import { LoginComponent } from './modules/login/login.component';


const routes: Routes = [
  { path: '',component:OrderListComponent },
  { path: 'signin',component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
