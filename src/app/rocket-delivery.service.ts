import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from './contacto';
import { Ingrediente } from './ingrediente';
import { LoginResponse } from './login-response';
import { Menu } from './menu';
import { Pedido } from './pedido';
import { UtilService } from './util-service';
import { Venta } from './venta';

import { Registrar } from './registrar';
import { Usuario } from './usuario';

@Injectable({ providedIn: 'root' })
export class RocketDeliveryService {

  private rocketDeliveryUrl = 'http://localhost:8080/'; // URL to web api

  constructor(private http: HttpClient, private utilService: UtilService) { }

  //Login
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

  //Buscar contacto
  buscarContactoByUsername(userName: string): Observable<Contacto> {
    return this.http.get<Contacto>(this.rocketDeliveryUrl + 'api/buscar-contacto/username/' + userName, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  getUsuariosSinContacto(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.rocketDeliveryUrl + 'usuarios/listar-usuarios-sin-contacto', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    });
  }

  //Registrar usuario
  registrar(registrarCliente: Registrar): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post<any>(this.rocketDeliveryUrl + 'usuarios/guardar-usuario', registrarCliente, {
      headers, responseType: 'text' as 'json'
    });
  }

  //Listar menu
  getMenus(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.rocketDeliveryUrl + 'api/listar-menus', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Listar contactos
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

  //Listar ventas
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

  //Listar ingredientes en stock
  getIngredientes(): Observable<Ingrediente[]> {
    return this.http.get<Ingrediente[]>(this.rocketDeliveryUrl + 'api/listar-stock', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Crear menu
  agregarMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.rocketDeliveryUrl + 'api/crear-menu', menu, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Crear pedido
  crearPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.rocketDeliveryUrl + 'api/crear-pedido', pedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Crear cliente
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

  //Estados de los pedidps
  establecerEnProgreso(venta: Venta): Observable<any> {
    return this.http.get<any>(this.rocketDeliveryUrl + 'api/en-progreso/' + venta.idPedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  listoParaEntrega(venta: Venta): Observable<any> {
    return this.http.get<any>(this.rocketDeliveryUrl + 'api/listo-para-entrega/' + venta.idPedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  establecerEntregado(venta: Venta): Observable<any> {
    return this.http.get<any>(this.rocketDeliveryUrl + 'api/entregado/' + venta.idPedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  establecerCancelado(venta: Venta): Observable<any> {
    return this.http.get<any>(this.rocketDeliveryUrl + 'api/cancelado/' + venta.idPedido, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Obtener el ingrediente por el id
  getIngredienteById(id: number): Observable<Ingrediente> {
    return this.http.get<Ingrediente>(this.rocketDeliveryUrl + 'api/buscar-ingrediente/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //reportes
  descargarReporte(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream')
      .set('Authorization', 'Bearer ' + this.utilService.getToken());

    return this.http.get<any>(this.rocketDeliveryUrl + 'api/descargar-reporte', {
      headers, responseType: 'blob' as 'json'
    });
  }

  //descargar cartera  de clientes
  descargarCartera(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/octet-stream')
      .set('Authorization', 'Bearer ' + this.utilService.getToken());

    return this.http.get<any>(this.rocketDeliveryUrl + 'api/descargar-cartera', {
      headers, responseType: 'blob' as 'json'
    });
  }

  //Cambiar clave usuario
  cambiarClave(usuario: Usuario): Observable<void> {
    return this.http.post<void>(this.rocketDeliveryUrl + 'api/cambiar-contraseña', usuario, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  // Editar ingrediente
  editarIngrediente(ingrediente: Ingrediente): Observable<void> {
    return this.http.put<void>(this.rocketDeliveryUrl + 'api/editar-ingrediente', ingrediente, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  // Eliminar ingrediente
  eliminarIngrediente(idIngredienteStock: number): Observable<void> {
    const url = `${this.rocketDeliveryUrl}api/eliminar-ingrediente/${idIngredienteStock}`;

    return this.http.delete<void>(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Editar contacto
  editarContacto(contacto: Contacto): Observable<void> {
    return this.http.put<void>(this.rocketDeliveryUrl + 'api/editar-contacto', contacto, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

  //Eliminar menu
  eliminarMenu(idMenu: number): Observable<string> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.utilService.getToken());

    return this.http.delete<string>(this.rocketDeliveryUrl + 'api/eliminar-menu/' + idMenu, {
      headers, responseType: 'text' as 'json'
    });
  }

   // Editar menu
   editarMenu(menu: Menu): Observable<void> {
     return this.http.put<void>(this.rocketDeliveryUrl + 'api/editar-menu', menu, {
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
         Authorization: 'Bearer ' + this.utilService.getToken(),
       }),
     });
   }

  //Obtener el menu por el id
  getMenuById(id: number): Observable<Menu> {
    return this.http.get<Menu>(this.rocketDeliveryUrl + 'api/buscar-menu/' + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.utilService.getToken(),
      }),
    });
  }

}
