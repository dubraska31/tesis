import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AgregarMenuComponent } from './agregar-menu/agregar-menu.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ContactosComponent } from './contactos/contactos.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { CrearIngredienteComponent } from './crear-ingrediente/crear-ingrediente.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GenerarUsuarioComponent } from './generar-usuario/generar-usuario.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { IngredientesComponent } from './ingredientes/ingredientes.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PagoComponent } from './pago/pago.component';
import { VentasComponent } from './ventas/ventas.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { EditarIngredienteComponent } from './editar-ingrediente/editar-ingrediente.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
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
  { path: 'crear-cliente', component: CrearClienteComponent },
  { path: 'generar-usuario', component: GenerarUsuarioComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'ingredientes', component: IngredientesComponent },
  { path: 'crear-ingrediente', component: CrearIngredienteComponent },
  { path: 'perfil-usuario', component: PerfilUsuarioComponent },
  { path: 'editar-ingrediente/:id', component: EditarIngredienteComponent },
  { path: "**", redirectTo: "bienvenida" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
