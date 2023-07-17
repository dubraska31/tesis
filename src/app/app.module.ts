import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AgregarMenuComponent } from './agregar-menu/agregar-menu.component';
import { AppComponent } from './app.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactosComponent } from './contactos/contactos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MessagesComponent } from './messages/messages.component';
import { PagoComponent } from './pago/pago.component';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent,
    AdminHomeComponent,
    CarritoComponent,
    ContactosComponent,
    AgregarMenuComponent,
    MenuComponent,
    PagoComponent,
    VentasComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
