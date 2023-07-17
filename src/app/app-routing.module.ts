import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactosComponent } from './contactos/contactos.component';
import { AgregarMenuComponent } from './agregar-menu/agregar-menu.component';
import { MenuComponent } from './menu/menu.component';
import { PagoComponent } from './pago/pago.component';
import { VentasComponent } from './ventas/ventas.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'agregar-menu', component: AgregarMenuComponent },
  { path: 'pago', component: PagoComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'crear-cliente', component: CrearClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
