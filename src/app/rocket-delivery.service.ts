import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';
import { LoginResponse } from './login-response';
import { Menu } from './menu';
import { Pedido } from './pedido';
import { UtilService } from './util-service';
import { Venta } from './venta';
import { Ingrediente } from './ingrediente';

import { Registrar } from './registrar';

@Injectable({ providedIn: 'root' })
export class RocketDeliveryService {

  private rocketDeliveryUrl = 'http://localhost:8080/'; // URL to web api

  constructor(private http: HttpClient, private utilService: UtilService) { }


   // login
  login(username: string, password: string): Observable<LoginResponse> {
    const body = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post<LoginResponse>(
      this.rocketDeliveryUrl + 'login',
      body.toString(),
      {
        headers: new HttpHeaders().set(
          'Content-Type',
          'application/x-www-form-urlencoded'
        ),
      }
    );
  }


  // listar menu
  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.rocketDeliveryUrl + 'api/listar-menus', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  // listar contactos
  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(
      this.rocketDeliveryUrl + 'api/listar-contactos',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.utilService.getToken(),
        }),
      }
    );
  }

  // listar ventas
  getVentas(): Observable<Venta[]> {
    return this.http.get<Venta[]>(
      this.rocketDeliveryUrl + 'api/listar-pedidos',
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.utilService.getToken(),
        }),
      }
    );
  }

    //listar ingredientes en stock
    getIngredientes(): Observable<Ingrediente[]> {
      return this.http.get<Ingrediente[]>(this.rocketDeliveryUrl + 'api/listar-stock', {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.utilService.getToken(),
        }),
      });
    }

  // agregar menu
  agregarMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.rocketDeliveryUrl + 'api/crear-menu', menu, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  // agregar pedido
  crearPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.rocketDeliveryUrl + 'api/crear-pedido', pedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  // agregar cliente
  crearCliente(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.rocketDeliveryUrl + 'api/crear-contacto', contacto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

 //AGREGAR INGREDIENTE
  crearIngrediente(ingrediente: Ingrediente): Observable<Ingrediente> {
    return this.http.post<Ingrediente>(this.rocketDeliveryUrl + 'api/crear-ingrediente', ingrediente, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }


  // registrar usuario
  registrar(registrarCliente: Registrar): Observable<any> {
    return this.http.post<any>(this.rocketDeliveryUrl + 'usuarios/guardar-usuario', registrarCliente, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    });
  }

  //pedidos
  establecerEnProgreso(venta: Venta): Observable<any> {
    return this.http.post<any>(this.rocketDeliveryUrl + 'api/en-progreso', venta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }
//pedidos
  establecerEntregado(venta: Venta): Observable<any> {
    return this.http.post<any>(this.rocketDeliveryUrl + 'api/entregado', venta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }
  //pedidos
  establecerCancelado(venta: Venta): Observable<any> {
    return this.http.post<any>(this.rocketDeliveryUrl + 'api/cancelado', venta, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }



}
