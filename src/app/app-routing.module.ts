import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './modules/auth/auth.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { OrderListComponent } from './modules/orders/order-list/order-list.component';


const routes: Routes = [
  { path: '',component:OrderListComponent },
  { path: 'signin',component:AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
