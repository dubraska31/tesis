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
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { GenerarUsuarioComponent } from './generar-usuario/generar-usuario.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { CrearIngredienteComponent } from './crear-ingrediente/crear-ingrediente.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

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
    VentasComponent,
    CrearClienteComponent,
    GenerarUsuarioComponent,
    BienvenidaComponent,
    IngredientesComponent,
    CrearIngredienteComponent,
    PerfilUsuarioComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
