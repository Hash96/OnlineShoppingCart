import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { MatModule } from './core/mat/mat.module';
import { ChatComponent } from './modules/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { OrderListComponent } from './modules/orders/order-list/order-list.component';
import { OrderDetailsComponent } from './modules/orders/order-details/order-details.component';
import { AuthComponent } from './modules/auth/auth.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './modules/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatComponent,
    OrderListComponent,
    OrderDetailsComponent,
    AuthComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
