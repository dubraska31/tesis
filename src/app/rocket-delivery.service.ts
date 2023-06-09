import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './login-response';
import { Menu } from './menu';
import { Contacto } from './contacto';
import { UtilService } from './util-service';

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

  // agregar menu
  agregarMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(this.rocketDeliveryUrl + 'api/crear-menu', menu, {
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
}
